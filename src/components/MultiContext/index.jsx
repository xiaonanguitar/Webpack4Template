import React, { useState } from 'react';
import { Button } from 'antd';

const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});

function MultiContext () {
    const [theme, setTheme] = useState('light');
    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={{ 'name': 'jhon' }}>
                    <Layout setTheme={setTheme} />
                </UserContext.Provider>
            </ThemeContext.Provider>
            {/*只有当Provider不被使用，也就是Context仅仅被用作订阅数据而不是用来发布数据的时候(换言之就是说当Consumer没有作为Provider的子元素时)，
                调用createContext()方法时传递的数据才会被当作当作源数据发布；而使用Provider来发布数据的时候，Provider的value属性会把初始化的数据覆盖掉*/}
            <ThemeContext.Consumer>
                {
                    (theme => {
                        return <div>hello:{theme}</div>
                    })
                }
            </ThemeContext.Consumer>
        </div>
    );
}

function Layout(props) {
  return (
    <div>
        <Sidebar setTheme={props.setTheme}/>
        <Content />
    </div>
  );
}

function Sidebar(props) {
   
    return (
        <ThemeContext.Consumer>
            {
                (theme) => {
                    return <Button type="primary" onClick={() => {
                        
                        props.setTheme(theme === 'light' ? 'dark' : 'light')
                    }}>Theme</Button>
                }
            }
            
        </ThemeContext.Consumer>
    )
}

// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

function ProfilePage({ user, theme }) {
    return (<div>{user.name}:{theme}</div>)
}

export default MultiContext;