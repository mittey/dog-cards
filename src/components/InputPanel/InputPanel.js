import React from "react";
import { Panel, Col } from "react-bootstrap";
import Input from "../../components/ui/Input/Input";
import Select from "../../components/ui/Select/Select";
import Textarea from "../../components/ui/Textarea/Textarea";

const inputPanel = props => {
  return (
    <div>
      <Col md={props.colmd}>
        <Panel>
          <Panel.Heading>Укажите информацию о пропавшем животном</Panel.Heading>
          <Panel.Body>
            <Select
              id="species-select"
              name="species"
              colmd={4}
              placeholder="Животное"
              label="Животное"
              options={props.options.speciesOptions}
              changed={props.speciesChanged}
              defaultValueText="Выберите животное"
            />
            <Select
              id="breed-select"
              name="breed"
              colmd={4}
              placeholder="Порода"
              label="Порода"
              options={props.options.breedOptions}
              changed={props.breedChanged}
              disabled={props.breedSelectDisabled}
              defaultValueText="Выберите породу"
            />
            <Select
              id="gender-select"
              name="gender"
              colmd={4}
              placeholder="Пол"
              label="Пол"
              options={props.options.genderOptions}
              changed={props.animalChanged}
              defaultValueText="Выберите пол"
            />
            <Input
              id="age-input"
              name="age"
              colmd={4}
              placeholder="Введите возраст"
              label="Возраст"
              changed={props.animalChanged}
            />
            <Input
              id="color-input"
              name="color"
              colmd={4}
              placeholder="Введите окрас"
              label="Окрас"
              changed={props.animalChanged}
            />
            <Input
              id="alias-input"
              name="alias"
              colmd={4}
              placeholder="Введите кличку"
              label="Кличка"
              changed={props.animalChanged}
            />
            <Textarea
              id="textarea"
              name="description"
              colmd={12}
              
              placeholder="Введите текст объявления..."
              label=""
              changed={props.descriptionChanged}
            />
          </Panel.Body>
        </Panel>
      </Col>
    </div>
  );
};

export default inputPanel;
