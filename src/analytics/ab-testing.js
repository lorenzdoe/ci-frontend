// const AlephBet = require("alephbet");
import AlephBet from 'alephbet';

/**
 * Set up a new A/B testing experiment with AlephBet
 * @param name Name of the experiment
 * @param variants Object of the experiment variants
 * @param adapter Adapter of the experiment
 * */
export const makeExperiment = (name, variants, adapter) => {
    return new AlephBet.Experiment({
        name: name,
        variants: variants,
        tracking_adapter: adapter,
    });
};

export const makeAdapter = () => {
    return {
        experiment_start: async function () {
            // console.log(experiment, variant, 'participate');
        },
        goal_complete: async function () {
            // console.log(experiment.name, variant, event_name);
        },
    };
};

// Experiment variant presets
export const experimentVariants = {
    'group': {
        A: {
            activate: function () {
                document.getElementById('inputText').textContent = 'Want to be part of our evergrowing family?';
                document.getElementById('input1').className = 'inputStyle';
                document.getElementById('input2').className = 'inputStyle';
                document.getElementById('button').className = 'buttonStyle';
                document.getElementById('button').textContent = 'Join now!';
                
            },
            weight: 50,
        },
        B: {
            activate: function () {
                document.getElementById('inputText').textContent = 'Create account:';
                document.getElementById('button').textContent = 'Sign-up!';
            },  
            weight: 50,
        },
    },
};
