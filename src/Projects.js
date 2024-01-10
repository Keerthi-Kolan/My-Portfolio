const Projects = () => {
    return ( 
        <div className="projects">
            <div className="project3">
                <h3>Emotion Based Music recommendation System</h3>
                <h4>Machine Learning Project</h4>
                <ul>
                    <li>A desktop application developed in python and frontend using tkinter module.</li>
                    <li>The application uses the Haar cascade classifier algorithm to detect facial features which are further analyzed to identify emotions to suggest music accordingly.</li>
                    <li>Apart from removing the cold start problem faced by modern music recommendation systems, it enhances music listening experience by promoting connections between users and music.</li>
                    <li>It also provides a competitive edge to music platforms in a crowded market.</li>
                </ul>
                </div>
                <div className="project2">
                <h3>Algorithm Visualizer</h3>
                <h4>Java Programming Project</h4>
                <ul>
                    <li>A full-fledged Java application built using java swing.</li>
                    <li>A Learning tool that helps novices understand the working of sorting algorithms.</li>
                    <li>Shows step by step visualization of selected algorithm for the given input, this helps user get a clear picture for the working of the algorithm.</li>
                    <li>This project is used by my undergraduate school as a learning tool for the Design and Analysis of algorithms course and around 1000 students have reported that they have benefited from this.</li>
                </ul>
                </div>
                <div className="project1">
                <h3>My Math Workbook</h3>
                <h4>An Android Application</h4>
                <ul>
                    <li>The app is built in react native.</li>
                    <li>A multiple screen mobile application that helps users to learn and practice a wide range of math concepts with varied levels of difficulty.</li>
                    <li>The practice sheets are aimed at eradicating math anxiety and are designed in a manner that excites the user to solve more and more problems and hence has over 5000 downloads on the Play Store.</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Projects;