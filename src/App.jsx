import './App.css'
import Company from './components/Company'
function App() {

  return (
    <>
     
     <div className='content'> 
     <Company cName="Aramco" empNum="10936" year="1977" servise="Oil" price="1000$" 
      name="Faris" lang="java" exp="2" com="Aramco" 
      name2="Raad" lang2="C++, Python" exp2="5" com2="Aramco" 
      name3="Basam" lang3="C, Java" exp3="10" com3="Aramco" 
      />
     <Company cName="Tuwaiq" empNum="10996" year="2019"  servise="BootCamp" price="1500$"
       name="Sami" lang="C" exp="20" com="Tuwaiq" 
       name2="Rody" lang2="Java, Python" exp2="15" com2="Tuwaiq" 
       name3="Kira" lang3="C, Python, Java" exp3="20" com3="Tuwaiq" 
        />
     <Company cName="Alibaba" empNum="936" year="1966"  servise="Online Shopping" price="56000$"
       name="Fay" lang="java" exp="2" com="Alibaba" 
       name2="Welliem" lang2="C++, Python" exp2="5" com2="Alibaba" 
       name3="Lili" lang3="C#" exp3="25" com3="Alibaba"  
       />
     </div>
    </>
  )
}

export default App
