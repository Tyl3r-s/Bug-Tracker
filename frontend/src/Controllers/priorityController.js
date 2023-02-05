const colors = ["#b33a3a", "#ff6700", "#ffff00"]

export default (priority) => {
    const level = ["High", "Medium", "Low"]
    return {
        level: (level[priority-1]),
        color: colors[priority-1]
    }    
}