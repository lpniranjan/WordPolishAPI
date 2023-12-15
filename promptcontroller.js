const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const promptController = {};

const wordPromptSchema = new mongoose.Schema({
  PresetId: {
    type: String,
    required: true
  },
  Format: {
    type: String,
    required: true
  },
  PromptFormat: {
    type: String,
    required: true
  },
  SystemPromptFormat: {
    type: String,
    required: true
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  CreatedBy: {
    type: String,
    required: true
  }
});

const WordPrompt = mongoose.model('WordPrompt', wordPromptSchema);

promptController.getprompt = async (req, res) => {
  try {
    const wordPrompts = await WordPrompt.find();
    res.json(wordPrompts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

promptController.getpromptbyid = async (req, res) => {
  try {
    const wordPrompts = await WordPrompt.findById(req.params.id);
    if (!wordPrompts) {
      return res.status(404).json({ error: 'Prompt not found' });
    }
    res.json(wordPrompts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

promptController.postprompt = async (req, res) => {
    try {
        const {PresetId, Format, PromptFormat, SystemPromptFormat, CreatedBy} = req.body;
        const wordPrompt = new WordPrompt({PresetId, Format, PromptFormat, SystemPromptFormat, CreatedBy});
        const savedTask = await wordPrompt.save();
        res.json(savedTask);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  };

  promptController.putprompt = async (req, res) => {
    try {
      const updatedWordPrompt = await WordPrompt.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedWordPrompt) {
        return res.status(404).json({error: 'Prompt not found' });
      }
      res.json(updatedWordPrompt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  promptController.deleteprompt = async (req, res) => {
    try {
      const deletedWordPrompt = await WordPrompt.findByIdAndDelete(req.params.id);
      if (!deletedWordPrompt) {
        return res.status(404).json({ error: 'Prompt not found' });
      }
      res.json(deletedWordPrompt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };  

module.exports = promptController;
