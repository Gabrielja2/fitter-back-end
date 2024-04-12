import { MissingParamError, InvalidTypeError } from "@/layers/presentation";


export class Validate {
	static fields(fields: { name: string, type: string, nullable?: boolean }[], body: { [key: string]: string }) {
		const errors: Error[] = [];
		fields.forEach(element => {
			const value = body[element.name];
			if (!value && !element.nullable) errors.push(new MissingParamError(element.name));
			if (value && typeof value !== "string") errors.push(new InvalidTypeError(element.name));

		});
		if (errors.length > 0) return errors[0];
	}
}



