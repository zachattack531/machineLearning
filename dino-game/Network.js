class NeuralNetwork {
    constructor(a,b,c,d) {
        if(a instanceof tf.Sequential){
            this.model = a;
            this.inputNodes = b;
            this.hiddenNodes = c;
            this.outputNodes = d;
        }   else {
            this.inputNodes = a;
            this.hiddenNodes = b;
            this.outputNodes = c;
            this.model = this.createModel()
        }
    }

    createModel(){
        //Unsupervised, dense neural network
        const model = tf.sequential();
        const hidden = tf.layers.dense({
            units: this.hiddenNodes,
            inputShape: [this.inputNodes],
            activation: 'sigmoid'
        })
        model.add(hidden);
        const hidden2 = tf.layers.dense({
            units: this.hiddenNodes,
            activation: 'sigmoid'
        })
        model.add(hidden2);
        const output = tf.layers.dense({
            units: this.outputNodes,
            activation: 'softmax'
        })
        model.add(output);

        return model;
    }

    dispose(){
        this.model.dispose();
    }
    predict(inputs){
        return tf.tidy(() =>{
            const xs = tf.tensor2d([inputs]);

            const ys = this.model.predict(xs); 

            return ys.dataSync();  // convert tensor to array
        }); 
    }
}