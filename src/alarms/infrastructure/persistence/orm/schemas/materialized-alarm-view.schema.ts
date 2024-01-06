import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";


// Read-only model help us to speed up our read operations
@Schema()
export class MaterializedAlarmView {
    @Prop({unique: true, index: true})
    id: string;

    @Prop()
    name: string;

    @Prop()
    severity: string;

    @Prop()
    triggeredAt: Date;

    @Prop()
    isAcknowledge: boolean;

    @Prop(
        raw([
            {
                id: String,
                name: String,
                type: {
                    type: String
                },
            }
        ]),
    )
    items: Array<{
        id: string,
        name: string,
        type: string,
    }>;
}

export const MaterializedAlarmViewSchema = SchemaFactory.createForClass(
    MaterializedAlarmView
);