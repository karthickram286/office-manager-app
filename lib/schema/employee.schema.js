const Joi = require('@hapi/joi');
const Positions = require('./employee-position');

const EmployeeSchema = Joi.object({
  empl_id: Joi.string()
              .required(),

  firstname: Joi.string()
              .min(2)
              .max(40)
              .required(),

  lastname: Joi.string()
              .min(1)
              .max(40)
              .required(),
    
  position: Joi.string()
              .valid(Positions.CEO,
                Positions.CTO, 
                Positions.VP, 
                Positions.DIRECTOR, 
                Positions.MANAGER, 
                Positions.TEAM_LEAD, 
                Positions.DEVELOPER, 
                Positions.QA)
              .required(),

  is_supervisor: Joi.boolean()
                  .required()
});

module.exports = EmployeeSchema;