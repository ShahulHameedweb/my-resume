import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shahul Hameed Akbar CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <div id="page-wrap" className={styles.pagewrap}>
    
        <p className={styles.description}>
         Web App Developer
         
        </p>
    
        <div id="contact-info" className="vcard">
        
            
        
            <h1 className="fn">Shahul Hameed Akbar</h1>
        
            <p>
                Mobile: <span className="tel">+91 90433 34401</span><br />
                Email: <a className="email" href="mailto:shahulwebdeve@gmail.com">shahulwebdeve@gmail.com</a>
                 
            </p>
        </div>
                
        <div id="objective">
        <h3>Objective</h3>
            <p>
                I am  a professional  web  app developer  with  creativity  and  I have  strong  focus  in  finding  solution  for challenging problems. 
            </p>
        </div>
        
        <div className="clear"></div>
        
        
            
            <h3>Career Synopsis</h3>
            
               <ul>
                    <li>March 2016 to Present - Working at <b>Think Tower Intech Platform Pvt.Ltd </b> as Lead / Senior Front End Developer.</li>
                    <li>April 2014 to Mar 2016 - Worked at <b>S-Creative</b> as Professional code developer in PHP and UI Developer.</li>
                    <li>Oct 2013 to Mar 2014 - Worked at Nano Nino, Coimbatore as Windows App.</li>
                </ul>
                <p></p>
            
            
            <div className="clear"></div>
            <h3>Skills</h3>
            
                <ul>
                    <li><b>Open source</b>: PHP 7, Angularjs, Javascript, Jquery, Json/Ajax, HTML 5, CSS3, Reactjs.</li>
                    <li><b>PHP Open Source</b>: Cake Framework, Php Laravel, WordPress, Opencart, Simple MVC Framework, Wordpress, oscommerce.</li>
                    <li><b>UI Framework</b>: Bootstrap, Angularjs, Foundation, Semantics UI, Sass/Less.</li>
                    <li><b>Wireframe Design</b>: Photoshop, Adobe Muse.</li>
                    <li><b>NativeProgramming</b>: React Native.</li>
                    <li><b>Database</b>: Mysql, Sql ,PSQL, NoSql.</li>
                    <li><b>Session</b>: Redis Message.</li>
                    <li><b>Elastic Search</b> : Apache Solr.</li>
                    <li><b>Version Control</b>: Git ,Git lab configure.</li>
                    <li><b>ERP</b>: SAP ABAP 4.</li>
                </ul> 
            
            
            <div className="clear"></div>
            <h3>My Work as a Front-end Development Team Lead</h3>
            <p> - Lead the entire front end development team of max 10 members.</p>
            <p> - Broke down New Development Feature requirements into Story points and tasks.</p>
            <p> - Interviewed over 40 candidates of up to 6 years of Experience to recruit for Front end team.</p>
            <p> - Mentored and directed all team members in resolving bugs and writing clean code.</p>

             <div className="clear"></div>
             <h3>My Role</h3>
             <p> - Developed most of the product based on Micro front end Service, Server side template composition.</p>
             <p> - Build-time integration’s, Run- time integration’s, Dynamic styling concepts, Payload size applications, Independent deployments.</p>
             <p> - Gathering information about new technologies and implementing in projects.</p>
             <p> - Practiced Agile Development for the past 1.7 years with daily morning Scrum stand-up meetings with the scrum master and the entire development team.</p>
             <p> - From the scratch UX & UI Planing for the new projects and getting approval from the client.</p>
    </div>
      </main>

     
    </div>
  )
}
