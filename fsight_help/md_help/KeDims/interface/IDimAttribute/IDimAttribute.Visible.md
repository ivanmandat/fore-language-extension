# IDimAttribute.Visible

IDimAttribute.Visible
-


# IDimAttribute.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет,
 отображать ли значения атрибута.


## Комментарии


Если Visible = True, то значения
 атрибута отображаются.


## Пример


Для выполнения примера предполагается наличие в репозитории календарного
 справочника с идентификатором «DICT_CALEND». Добавьте ссылки на системные
 сборки «Metabase», «Dimensions».


			Sub UserProc;

Var

    mb: IMetabase;

    dimension: IDimensionModel;

    attribute: IDimAttribute;

    attributes: IDimAttributes;

Begin

    mb := MetabaseClass.Active;

    dimension := mb.ItemById("DICT_CALEND").Edit As IDimensionModel;

    attributes := dimension.Attributes;

    attribute := attributes.FindById("BLOCK_TYPE");

    If attribute <> Null Then

        attribute.Visible := True;

        (dimension As IMetabaseObject).Save;

    End If;

End Sub UserProc;


После выполнения примера значения атрибута «Тип блока календаря» будут
 отображаться в открытом календарном справочнике.


См. также:


[IDimAttribute](IDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
