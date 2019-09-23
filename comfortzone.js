// Hello!
// I like to be comfortable. Can you build me a system that helps me regulate
// the temperature of my house?
//
// This system should:
// - turn on and off with a manual command
// - operate as a heater:
//    - run when the house is too cold
//    - turn off (or not run) when the house is warm enough
//    - let me change the temperature from the low/high settings
// - operate as an air conditioner:
//    - run when the house is too hot
//    - turn off (or not run) when the house is too cold
//    - let me change the temperature from the low/high settings
// - be able to tell me what the current house temperature is
// - be able to tell me if the heater *or* AC is running (if it's on)
//
// The system has three main states:
//    1. power - ON or OFF
//    2. mode - heater or AC
//    3. current temperature
// The heater has one main state: ON or OFF
// The AC has one main state: ON on OFF
// The heater and AC cannot run at the same time. Only one can be running.
//
// You do not have to have a sense of time (if you really want to, you can).
// If you want to build this with a sense of time, turning on the heater or
// AC should increment or decrement the current temperature as it runs, and it
// will need to be smart enough to turn off (or on) as needed.
//
// I would strongly recommend building this without a sense of time.
//
// If you build this without a sense of time, you're just wiring up a system
// that knows if it should or should not run.
