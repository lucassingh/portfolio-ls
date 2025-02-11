import styles from "./style.module.scss";

export const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
    const categories = ["All", "React", "Angular", "Next JS", "3D animations"];

    return (
        <div className={styles.sidebar}>
            {categories.map((category) => (
                <div
                    key={category}
                    className={`${styles.button} ${selectedCategory === category ? styles.active : ""}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;