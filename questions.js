const quizQuestions = [
  {
    "question": "What is the primary function of an expansion valve in a refrigeration cycle?",
    "a": "To increase pressure and temperature of the refrigerant",
    "b": "To decrease pressure and temperature of the refrigerant",
    "c": "To convert vapor refrigerant into liquid",
    "d": "To circulate the refrigerant through the system",
    "answer": "b"
  },
  {
    "question": "Which of the following processes takes place at constant temperature?",
    "a": "Isobaric",
    "b": "Isochoric",
    "c": "Isothermal",
    "d": "Isentropic",
    "answer": "c"
  },
  {
    "question": "The process of heat transfer through a solid medium by direct contact is called:",
    "a": "Conduction",
    "b": "Convection",
    "c": "Radiation",
    "d": "Advection",
    "answer": "a"
  },
  {
    "question": "In a p-h (pressure-enthalpy) diagram, the region inside the vapor dome represents:",
    "a": "Superheated vapor",
    "b": "Subcooled liquid",
    "c": "Saturated liquid-vapor mixture",
    "d": "Supercritical fluid",
    "answer": "c"
  },
  {
    "question": "The ratio of actual water vapor pressure to the saturation water vapor pressure at the same temperature is known as:",
    "a": "Specific humidity",
    "b": "Relative humidity",
    "c": "Absolute humidity",
    "d": "Humidity ratio",
    "answer": "b"
  },
  {
    "question": "Which component in a central air conditioning system rejects heat to the ambient air?",
    "a": "Evaporator",
    "b": "Compressor",
    "c": "Condenser",
    "d": "Expansion valve",
    "answer": "c"
  },
  {
    "question": "The temperature at which moisture begins to condense out of the air is called the:",
    "a": "Dry-bulb temperature",
    "b": "Wet-bulb temperature",
    "c": "Dew-point temperature",
    "d": "Saturated temperature",
    "answer": "c"
  },
  {
    "question": "In psychrometrics, a sensible heating process changes the air's:",
    "a": "Humidity ratio without changing dry-bulb temperature",
    "b": "Dry-bulb temperature without changing humidity ratio",
    "c": "Enthalpy without changing wet-bulb temperature",
    "d": "Relative humidity while keeping dry-bulb temperature constant",
    "answer": "b"
  },
  {
    "question": "Which type of compressor uses two interleaving scrolls to pump and compress fluid?",
    "a": "Reciprocating compressor",
    "b": "Rotary vane compressor",
    "c": "Scroll compressor",
    "d": "Centrifugal compressor",
    "answer": "c"
  },
  {
    "question": "The primary objective of subcooling the refrigerant before it enters the expansion valve is to:",
    "a": "Increase the work output of the compressor",
    "b": "Ensure only vapor enters the expansion valve",
    "c": "Increase the refrigerating effect and ensure pure liquid enters the valve",
    "d": "Decrease the condenser pressure",
    "answer": "c"
  },
  {
    "question": "What happens during an adiabatic process?",
    "a": "No heat enters or leaves the system",
    "b": "The temperature remains constant",
    "c": "The pressure remains constant",
    "d": "The volume remains constant",
    "answer": "a"
  },
  {
    "question": "The chemical formula for the widely used refrigerant R-134a is:",
    "a": "CH2FCF3",
    "b": "CH3CHF2",
    "c": "CF3CH2F",
    "d": "CHClF2",
    "answer": "a"
  },
  {
    "question": "Which instrument is used to measure air velocity in HVAC ductwork?",
    "a": "Psychrometer",
    "b": "Anemometer",
    "c": "Manometer",
    "d": "Barometer",
    "answer": "b"
  },
  {
    "question": "An air handling unit (AHU) primarily manages which of the following?",
    "a": "Refrigerant compression",
    "b": "Air circulation, filtration, and thermal conditioning",
    "c": "Condenser water cooling",
    "d": "Cooling tower chemical treatment",
    "answer": "b"
  },
  {
    "question": "The flow of heat from a lower temperature body to a higher temperature body requires:",
    "a": "No external energy according to the First Law of Thermodynamics",
    "b": "External work input according to the Second Law of Thermodynamics",
    "c": "A constant volume process",
    "d": "An isentropic expansion only",
    "answer": "b"
  },
  {
    "question": "The measure of a material's ability to resist heat flow is represented by its:",
    "a": "Thermal conductivity (k-value)",
    "b": "Thermal resistance (R-value)",
    "c": "Heat capacity",
    "d": "Emissivity",
    "answer": "b"
  },
  {
    "question": "Which refrigerant is considered a natural refrigerant with zero ODP and extremely low GWP?",
    "a": "R-22",
    "b": "R-410A",
    "c": "R-744 (Carbon Dioxide)",
    "d": "R-134a",
    "answer": "c"
  },
  {
    "question": "A variable air volume (VAV) system controls indoor temperature by varying the:",
    "a": "Temperature of the supplied air at a constant volume",
    "b": "Volume of the supplied air at a constant temperature",
    "c": "Refrigerant flow rate to the condenser",
    "d": "Speed of the cooling tower fan",
    "answer": "b"
  },
  {
    "question": "What does a psychrometric chart describe?",
    "a": "The relationship between pressure, volume, and temperature of gases",
    "b": "The physical and thermodynamic properties of moist air",
    "c": "The performance curves of centrifugal fans",
    "d": "The pressure drop across air filters",
    "answer": "b"
  },
  {
    "question": "The component that extracts heat from the space being cooled is the:",
    "a": "Compressor",
    "b": "Condenser",
    "c": "Evaporator",
    "d": "Receiver",
    "answer": "c"
  },
  {
    "question": "Which parameter remains constant during a sensible cooling process?",
    "a": "Relative humidity",
    "b": "Wet-bulb temperature",
    "c": "Humidity ratio (moisture content)",
    "d": "Enthalpy",
    "answer": "c"
  },
  {
    "question": "What is the purpose of a cooling tower in an HVAC system?",
    "a": "To cool the air supplied to the occupied rooms directly",
    "b": "To reject heat from the water-cooled condenser to the atmosphere",
    "c": "To evaporate refrigerant before the compressor stage",
    "d": "To store chilled water for peak demand periods",
    "answer": "b"
  },
  {
    "question": "The term 'COP' in refrigeration systems stands for:",
    "a": "Coefficient of Performance",
    "b": "Capacity of Power",
    "c": "Cooling Output Potential",
    "d": "Compressor Operating Pressure",
    "answer": "a"
  },
  {
    "question": "A device that transfers heat between two fluids without mixing them is a:",
    "a": "Compressor",
    "b": "Heat exchanger",
    "c": "Flash tank",
    "d": "Separator",
    "answer": "b"
  },
  {
    "question": "Which of the following is a symptom of a restricted expansion valve?",
    "a": "High suction pressure and high head pressure",
    "b": "Low suction pressure and low head pressure",
    "c": "Low suction pressure and high head pressure",
    "d": "High suction pressure and low head pressure",
    "answer": "b"
  },
  {
    "question": "What is the standard unit used to express air flow rates in HVAC systems?",
    "a": "RPM",
    "b": "CFM (Cubic Feet per Minute)",
    "c": "PSI",
    "d": "GPM (Gallons per Minute)",
    "answer": "b"
  },
  {
    "question": "The process of introducing fresh outdoor air into a building to maintain indoor air quality is called:",
    "a": "Infiltration",
    "b": "Exfiltration",
    "c": "Ventilation",
    "d": "Recirculation",
    "answer": "c"
  },
  {
    "question": "Which type of valve modulates the flow of chilled water through a cooling coil based on a thermostat signal?",
    "a": "Check valve",
    "b": "Balancing valve",
    "c": "Control valve (e.g., 2-way or 3-way)",
    "d": "Gate valve",
    "answer": "c"
  },
  {
    "question": "What does a high superheat reading at the evaporator outlet usually indicate?",
    "a": "An overcharged system",
    "b": "A flooded evaporator",
    "c": "A starved evaporator (insufficient refrigerant)",
    "d": "A failing compressor valvetrain",
    "answer": "c"
  },
  {
    "question": "The heat required to change the phase of a substance without changing its temperature is called:",
    "a": "Sensible heat",
    "b": "Latent heat",
    "c": "Specific heat",
    "d": "Superheat",
    "answer": "b"
  },
  {
    "question": "A standard Ton of Refrigeration is equivalent to heat removal at a rate of:",
    "a": "12,000 BTU/hr",
    "b": "24,000 BTU/hr",
    "c": "100,000 BTU/hr",
    "d": "3,600 BTU/hr",
    "answer": "a"
  },
  {
    "question": "Which log or tool is primarily used to track static, velocity, and total pressures in air ducts?",
    "a": "Manometer and Pitot tube",
    "b": "Hydrometer",
    "c": "Tachometer",
    "d": "Ohm meter",
    "answer": "a"
  },
  {
    "question": "The primary danger of liquid refrigerant returning to the compressor (slugging) is:",
    "a": "High electricity consumption",
    "b": "Mechanical damage to the compressor components",
    "c": "An immediate drop in condenser pressure",
    "d": "Excessive superheating of the motor windings",
    "answer": "b"
  },
  {
    "question": "Which parameter on a psychrometric chart is represented by horizontal lines extending to the right vertical axis?",
    "a": "Dry-bulb temperature",
    "b": "Humidity ratio / Dew point",
    "c": "Relative humidity curves",
    "d": "Specific volume",
    "answer": "b"
  },
  {
    "question": "A MERV rating on an air filter indicates its:",
    "a": "Maximum Energy Reduction Value",
    "b": "Minimum Efficiency Reporting Value",
    "c": "Moisture Evibration Recovery Velocity",
    "d": "Maintenance and Efficiency Rating Volume",
    "answer": "b"
  },
  {
    "question": "In a direct expansion (DX) system:",
    "a": "Chilled water cools the air passing through the air handler",
    "b": "The evaporator coil cools the indoor air stream directly",
    "c": "A cooling tower is always required",
    "d": "Refrigerant never leaves the mechanical plant room",
    "answer": "b"
  },
  {
    "question": "What is the primary function of a compressor in a vapor compression cycle?",
    "a": "To liquefy the refrigerant vapor",
    "b": "To raise the pressure and boiling point of the refrigerant",
    "c": "To drop the temperature of the liquid refrigerant",
    "d": "To store large quantities of reserve refrigerant",
    "answer": "b"
  },
  {
    "question": "An uninsulated cold water pipe sweat or condenses moisture because its surface temperature is:",
    "a": "Above the dry-bulb temperature of the room",
    "b": "Below the dew-point temperature of the surrounding air",
    "c": "Equal to the wet-bulb temperature of the air",
    "d": "Highly conductive to radiation heat transfer",
    "answer": "b"
  },
  {
    "question": "Which of the following describes a constant volume, variable temperature (CAV) system?",
    "a": "It adjusts airflow rate while keeping supply air temperature fixed",
    "b": "It maintains a constant airflow rate while adjusting supply air temperature",
    "c": "It cycles the fan on and off based on zone demand",
    "d": "It varies the speed of the chiller compressor dynamically",
    "answer": "b"
  },
  {
    "question": "What type of heat transfer occurs when air moves across a hot heating coil?",
    "a": "Natural conduction",
    "b": "Forced convection",
    "c": "Thermal radiation",
    "d": "Latent heat exchange",
    "answer": "b"
  },
  {
    "question": "A multi-split air conditioning system differs from a standard split system by:",
    "a": "Having multiple outdoor units connected to one indoor unit",
    "b": "Connecting multiple indoor units to a single outdoor unit",
    "c": "Using both water and refrigerant as cooling mediums simultaneously",
    "d": "Operating without a thermal expansion device",
    "answer": "b"
  },
  {
    "question": "The primary function of a filter drier in a refrigeration line is to remove:",
    "a": "Excess refrigerant charge",
    "b": "Moisture and solid contaminants",
    "c": "Oil carried over from the compressor",
    "d": "Non-condensable gases like air",
    "answer": "b"
  },
  {
    "question": "Which law states that the total pressure of a mixture of non-reactive gases is equal to the sum of their partial pressures?",
    "a": "Boyle's Law",
    "b": "Dalton's Law",
    "c": "Charles's Law",
    "d": "Gay-Lussac's Law",
    "answer": "b"
  },
  {
    "question": "A chiller system drops the temperature of water or glycol, which is then pumped to:",
    "a": "The outdoor condenser fan deck",
    "b": "Cooling coils in air handling units or fan terminal units",
    "c": "The compression chambers directly",
    "d": "Domestic hot water loops",
    "answer": "b"
  },
  {
    "question": "What parameter is measured along the horizontal baseline axis of a standard psychrometric chart?",
    "a": "Enthalpy",
    "b": "Dry-bulb temperature",
    "c": "Wet-bulb temperature",
    "d": "Relative humidity",
    "answer": "b"
  },
  {
    "question": "An economizer cycle in an air handling unit works by:",
    "a": "Running the compressor at lower speeds during the night",
    "b": "Using cool outdoor air instead of mechanical refrigeration when conditions allow",
    "c": "Restricting the total airflow to unoccupied zones",
    "d": "Preheating the return air using solar thermal panels",
    "answer": "b"
  },
  {
    "question": "If a room requires both heating and humidification in winter, what type of processes are applied?",
    "a": "Sensible cooling and dehumidification",
    "b": "Sensible heating and latent heating",
    "c": "Sensible heating and dehumidification",
    "d": "Evaporative cooling and sensible cooling",
    "answer": "b"
  },
  {
    "question": "The accumulation of oil at the bottom of an evaporator coil typically leads to:",
    "a": "Increased heat transfer efficiency",
    "b": "Reduced heat transfer efficiency and potential compressor oil starvation",
    "c": "Lower compressor discharge pressures",
    "d": "An expansion valve freeze-up",
    "answer": "b"
  },
  {
    "question": "A high-pressure cutout switch is installed in a refrigeration system primarily to protect against:",
    "a": "Evaporator freeze-ups due to low airflow",
    "b": "Excessive pressures resulting from condenser fan failure or blockages",
    "c": "Compressor damage from liquid slugging",
    "d": "Loss of system refrigerant charge",
    "answer": "b"
  },
  {
    "question": "What type of fan is most commonly used inside duct systems due to its ability to handle high static pressures?",
    "a": "Propeller fan",
    "b": "Centrifugal fan",
    "c": "Axial flow fan",
    "d": "Cross-flow fan",
    "answer": "b"
  },
  {
    "question": "What does a psychrometer measure?",
    "a": "Air pressure and density in closed ducts",
    "b": "Dry-bulb and wet-bulb temperatures to determine humidity levels",
    "c": "Refrigerant moisture concentration in liquid lines",
    "d": "Total volume of air passing through a diffuser diff",
    "answer": "b"
  },
  {
    "question": "Which of the following will cause a low suction pressure condition?",
    "a": "Dirty air filter or a broken evaporator fan belt",
    "b": "Overcharged refrigerant circuit",
    "c": "Leaking compressor discharge valves",
    "d": "Blocked condenser airflow",
    "answer": "a"
  },
  {
    "question": "The total heat content of moist air per unit mass is called its:",
    "a": "Entropy",
    "b": "Enthalpy",
    "c": "Internal energy",
    "d": "Sensible capacity",
    "answer": "b"
  },
  {
    "question": "What is the primary function of a crankcase heater on a refrigeration compressor?",
    "a": "To warm up the room air during startup periods",
    "b": "To prevent refrigerant from migrating and condensing into the oil during shutdown",
    "c": "To increase the superheat parameter at the compressor inlet",
    "d": "To reduce the viscosity of the oil to near-zero levels",
    "answer": "b"
  },
  {
    "question": "A 3-way control valve regulates temperature across a coil by either:",
    "a": "Throttling or expanding the fluid stream",
    "b": "Mixing or diverting the fluid streams",
    "c": "Isolating or checking backflows",
    "d": "Varying system pressure drops linearly",
    "answer": "b"
  },
  {
    "question": "When liquid refrigerant boils inside the evaporator, it absorbs heat from the surroundings at a:",
    "a": "Constantly increasing pressure",
    "b": "Constant pressure and constant temperature",
    "c": "Constantly decreasing temperature",
    "d": "Varying pressure and enthalpy",
    "answer": "b"
  },
  {
    "question": "The thermodynamic property that remains constant during an ideal throttling process through an expansion valve is:",
    "a": "Entropy",
    "b": "Enthalpy",
    "c": "Temperature",
    "d": "Internal energy",
    "answer": "b"
  },
  {
    "question": "What does an aspect ratio of a duct mean?",
    "a": "The ratio of duct length to its total weight",
    "b": "The ratio of the width to the height of a rectangular duct cross-section",
    "c": "The ratio of velocity pressure to static pressure",
    "d": "The ratio of friction loss to total duct surface area",
    "answer": "b"
  },
  {
    "question": "Which component in an HVAC system uses water evaporation to cool a condenser water loop?",
    "a": "Chiller evaporator barrel",
    "b": "Cooling tower",
    "c": "Air handling unit coil bank",
    "d": "Dehumidifier element",
    "answer": "b"
  },
  {
    "question": "If an HVAC technician measures a 0% relative humidity value, it means the air:",
    "a": "Is completely saturated with moisture",
    "b": "Contains absolutely no water vapor",
    "c": "Is at its precise wet-bulb breakdown limit",
    "d": "Has reached its maximum possible density point",
    "answer": "b"
  },
  {
    "question": "What is the function of an oil separator in a commercial refrigeration plant?",
    "a": "To mix oil thoroughly into the liquid line stream",
    "b": "To catch oil leaving the compressor and return it to the crankcase",
    "c": "To filter out scale particles from the evaporator circuit",
    "d": "To store backup refrigerant oil at low temperatures",
    "answer": "b"
  },
  {
    "question": "The process of removing moisture from the air is called:",
    "a": "Humidification",
    "b": "Dehumidification",
    "c": "Sensible cooling",
    "d": "Evaporative cooling",
    "answer": "b"
  },
  {
    "question": "In a water-cooled condenser system, the water absorbs heat from the refrigerant and carries it to the:",
    "a": "Expansion valve",
    "b": "Cooling tower",
    "c": "Evaporator",
    "d": "Air handler fan room",
    "answer": "b"
  },
  {
    "question": "A thermostatic expansion valve (TXV) controls the flow of refrigerant based on the:",
    "a": "Head pressure at the compressor discharge port",
    "b": "Superheat at the evaporator outlet",
    "c": "Temperature of the air inside the conditioned space",
    "d": "Water level inside the chiller barrel",
    "answer": "b"
  },
  {
    "question": "The heat added to a vapor substance that raises its temperature above its boiling point is known as:",
    "a": "Latent heat of vaporization",
    "b": "Superheat",
    "c": "Subcooling",
    "d": "Sensible enthalpy addition",
    "answer": "b"
  },
  {
    "question": "Which of the following duct materials offers the least resistance to airflow?",
    "a": "Flexible ducting loops",
    "b": "Galvanized sheet metal",
    "c": "Fibrous glass duct board panels",
    "d": "Concrete structural masonry ducts",
    "answer": "b"
  },
  {
    "question": "What color cylinder is standard for R-22 refrigerant reclamation or tracking?",
    "a": "Light Green",
    "b": "Rose / Light Maroon",
    "c": "Greenish-Blue / Teal",
    "d": "Dark Blue",
    "answer": "a"
  },
  {
    "question": "A split system air conditioner gets its name because:",
    "a": "It splits the airflow into two independent ducts",
    "b": "The system components are split between indoor and outdoor locations",
    "c": "It uses two different styles of expansion devices sequentially",
    "d": "The compressor breaks down power phases into sections",
    "answer": "b"
  },
  {
    "question": "What happens to the relative humidity of air when it is heated sensibly?",
    "a": "It remains exactly the same",
    "b": "It decreases",
    "c": "It increases rapidly",
    "d": "It approaches 100% saturation status",
    "answer": "b"
  },
  {
    "question": "Which device is designed to store liquid refrigerant after it leaves the condenser?",
    "a": "Accumulator",
    "b": "Receiver",
    "c": "Oil separator vessel",
    "d": "Intercooler column",
    "answer": "b"
  },
  {
    "question": "A low-pressure safety switch shuts down the compressor if the system experiences a:",
    "a": "Severe loss of refrigerant charge or a frozen coil condition",
    "b": "Condenser fan motor electrical failure",
    "c": "High water level state in the cooling tower pit",
    "d": "Voltage spike on the main building panel",
    "answer": "a"
  },
  {
    "question": "What is the primary function of a secondary refrigerant?",
    "a": "To replace the main compressor oil completely",
    "b": "To absorb heat from a space and transfer it to a primary refrigeration loop without changing phase",
    "c": "To act as a backup fluid if a primary leak occurs",
    "d": "To increase the flash gas content at the expansion valve outlet",
    "answer": "b"
  },
  {
    "question": "The temperature reading obtained from a standard thermometer exposed directly to the air stream is the:",
    "a": "Wet-bulb temperature",
    "b": "Dry-bulb temperature",
    "c": "Dew-point temperature",
    "d": "Operative temperature indicator",
    "answer": "b"
  },
  {
    "question": "What type of heat transfer occurs when heat travels through space via electromagnetic waves?",
    "a": "Conduction",
    "b": "Radiation",
    "c": "Convection",
    "d": "Mass transfer advection",
    "answer": "b"
  },
  {
    "question": "An accumulation of frost on an evaporator coil will act as a layer of:",
    "a": "Thermal insulation, reducing heat transfer efficiency",
    "b": "Thermal conduction material, increasing cooling efficiency",
    "c": "A pressure stabilizer for the expansion system",
    "d": "A drying agent for high-velocity supply ducts",
    "answer": "a"
  },
  {
    "question": "Which refrigeration component decreases the volume of gas to increase its pressure?",
    "a": "Condenser bundle",
    "b": "Compressor",
    "c": "Evaporator coil",
    "d": "Liquid receiver tank",
    "answer": "b"
  },
  {
    "question": "The process of removing heat from a liquid substance to drop its temperature below its boiling point is:",
    "a": "Superheating",
    "b": "Subcooling",
    "c": "Evaporating change",
    "d": "Latent rejection",
    "answer": "b"
  },
  {
    "question": "Which metric is used to measure the total seasonal efficiency of residential air conditioning equipment?",
    "a": "COP",
    "b": "SEER (Seasonal Energy Efficiency Ratio)",
    "c": "EER rating baseline",
    "d": "KW per Ton metric",
    "answer": "b"
  },
  {
    "question": "The dynamic pressure of air moving through an HVAC duct is directly related to its:",
    "a": "Temperature",
    "b": "Velocity",
    "c": "Relative humidity index",
    "d": "Filter surface area",
    "answer": "b"
  },
  {
    "question": "A system that uses chilled water loop systems to distribute cooling through a facility is known as a:",
    "a": "Direct expansion system",
    "b": "Hydronic system",
    "c": "Variable refrigerant volume array",
    "d": "Constant volume terminal network",
    "answer": "b"
  },
  {
    "question": "What is the primary benefit of a multi-stage compressor setup?",
    "a": "It uses cheaper mineral oils successfully",
    "b": "It improves efficiency when operating under high compression ratios",
    "c": "It eliminates the need for an outdoor condenser coil layout",
    "d": "It allows the system to work without any expansion valves",
    "answer": "b"
  },
  {
    "question": "The presence of non-condensable gases (like air) in a refrigeration system causes a:",
    "a": "Drop in discharge pressure and drop in efficiency",
    "b": "Rise in discharge pressure and drop in efficiency",
    "c": "Rise in suction pressure and freeze-ups",
    "d": "Drop in compressor operating temperatures",
    "answer": "b"
  },
  {
    "question": "Which parameter on the psychrometric chart runs diagonally from top-left down toward the bottom-right?",
    "a": "Dry-bulb lines",
    "b": "Wet-bulb and Enthalpy lines",
    "c": "Relative humidity lines",
    "d": "Humidity ratio lines",
    "answer": "b"
  },
  {
    "question": "An inline device containing a sight glass allows a technician to visually check for:",
    "a": "Refrigerant charge level (bubbles vs liquid) and moisture presence",
    "b": "Compressor motor rotational speed values",
    "c": "Air leak entry paths inside a suction line",
    "d": "Static pressure drops across lines",
    "answer": "a"
  },
  {
    "question": "A backward-curved centrifugal fan blade configuration is favored because it is:",
    "a": "Inexpensive and highly noisy",
    "b": "Non-overloading and highly efficient",
    "c": "Prone to stall under low static pressures",
    "d": "Designed only for small portable equipment fields",
    "answer": "b"
  },
  {
    "question": "The difference between the dry-bulb and wet-bulb temperatures is called the:",
    "a": "Dew-point gap",
    "b": "Wet-bulb depression",
    "c": "Sensible cooling span",
    "d": "Psychrometric delta value",
    "answer": "b"
  },
  {
    "question": "Which refrigeration component is designed specifically to protect the compressor from liquid slugging coming from the suction line?",
    "a": "Liquid receiver tank",
    "b": "Suction line accumulator",
    "c": "Oil separator column",
    "d": "Discharge muffler device",
    "answer": "b"
  },
  {
    "question": "If an engineer increases the volume of an ideal gas while keeping its temperature constant, the pressure will:",
    "a": "Increase proportionally",
    "b": "Decrease proportionally",
    "c": "Remain perfectly unchanged",
    "d": "Fluctuate dynamically",
    "answer": "b"
  },
  {
    "question": "What is the primary function of a damper inside an air distribution network?",
    "a": "To clean out particulate dust fields",
    "b": "To regulate or completely block the flow of air through a duct section",
    "c": "To change air direction smoothly around 90-degree turns",
    "d": "To soundproof high-velocity noise regions",
    "answer": "b"
  },
  {
    "question": "The total heat removed during an air conditioning process that changes both temperature and moisture levels is the sum of:",
    "a": "Conduction heat and radiation heat parameters",
    "b": "Sensible heat and latent heat capacities",
    "c": "Superheat and subcooling thermal drops",
    "d": "Enthalpy values and entropy differences",
    "answer": "b"
  },
  {
    "question": "Which type of cooling tower design utilizes a fan to pull air vertically upward through the fill material against the falling water stream?",
    "a": "Natural draft configuration",
    "b": "Induced draft counterflow configuration",
    "c": "Forced draft crossflow array",
    "d": "Hyperbolic atmospheric stack system",
    "answer": "b"
  },
  {
    "question": "A system running with a completely iced-up evaporator coil will show an immediate:",
    "a": "Rise in room cooling performance",
    "b": "Drop in air flow rate and drop in suction pressures",
    "c": "Rise in suction line operating temperatures",
    "d": "Decline in overall compressor cycling speeds",
    "answer": "b"
  },
  {
    "question": "What happens during a true sensible cooling process on a psychrometric chart?",
    "a": "Air moves horizontally to the left",
    "b": "Air moves vertically upward",
    "c": "Air follows a diagonal saturation path downward",
    "d": "Air moves horizontally to the right side",
    "answer": "a"
  },
  {
    "question": "The component that serves as the barrier boundary separating high-pressure gas from low-pressure liquid in a basic refrigeration system loop is the:",
    "a": "Compressor crankshaft assembly",
    "b": "Expansion device",
    "c": "Condenser manifold setup",
    "d": "Accumulator internal tube network",
    "answer": "b"
  },
  {
    "question": "What parameter is calculated to ensure an indoor workspace gets enough total air volume changes per hour?",
    "a": "Total system static pressure",
    "b": "ACH (Air Changes per Hour)",
    "c": "GPM balancing load factor",
    "d": "MERV bypass clearance calculation",
    "answer": "b"
  }
];
