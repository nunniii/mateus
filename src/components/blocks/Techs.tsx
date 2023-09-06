import { ElixirIcon } from "./Techs/ElixirIcon"
import { ReactIcon } from "./Techs/ReactIcon"



export function Techs() {
  const techs = [
    {
      containerClass: "ElixirContainer",
      name: "Elixir",
      icon: ElixirIcon,
      Type: "Realtime, Backend",
      Use: "Building fault-tolerant realtime systems that scale out across multiple nodes"
    },
    {
      containerClass: "ReactContainer",
      name: "React",
      icon: ReactIcon,
      Type: "Realtime, Backend",
      Use: "Building fault-tolerant realtime systems that scale out across multiple nodes"
    }
  ]
  
  return (
    <div>
      <table>
        <tr>
          <th>Icon</th>
          <th>Name</th>
          <th>Type</th>
          <th>Use case</th>
        </tr>

    
      {techs.map((tech, index) => (
        <tr key={index}>
          <td>
            <div className="{tech.containerClass}">
              {tech.icon()}
            </div>
          </td>
          <td>{tech.name}</td>
          <td>{tech.Type}</td>
          <td>{tech.Use}</td>
        </tr>
      ))}



        
        
        
      </table>
    </div>

  )
}
