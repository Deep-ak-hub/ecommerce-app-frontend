# Component
  - independent, reusable building blocks that serve as the foundation for building user interfaces (UI)
  - Types:
    a. Class Based Component(Stateful Component)
    b. Functional Component(Stateless Component)

# props
  properties that are passed into react components from parent to child

# Hook
  - any function starting with `use` keyword
  - hook functions can only be used within the functional component
  - Major hooks: 
    a. useState
    b. useEffect

# State
  - object that allows to store and manage data that changes over the time
  - two types of state:
    a. local state
    b. global state
  - when a state varaible is initialized or updated, the component will re-render
  - donot change or update state immediately when component is loaded before first render

  ### SideEffect or Effect Hook
    - whenever your state of the component is updated/changed
    - `useEffect` 