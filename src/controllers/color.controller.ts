import { ControllerAction } from "../types";
import * as colorService from '../services/color.service'

export const getAll: ControllerAction = (req, res) => {
    const colors = colorService.findAll();

    res.send(colors);
};