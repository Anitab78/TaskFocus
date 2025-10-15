export default function Taskform() {
    return(
        <form>
        <div>
            <input type="text" placeholder="Enter the task"/>
            <button type="submit">Add Task</button>
       
            <select>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select>
                <option valoue="general">General</option>
                <option value="work">Work</option>
                <option value="personal">pers</option>
            </select>
        </div>
        </form>
    )
}
