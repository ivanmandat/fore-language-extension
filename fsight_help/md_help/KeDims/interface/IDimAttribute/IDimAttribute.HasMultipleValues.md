# IDimAttribute.HasMultipleValues

IDimAttribute.HasMultipleValues
-


# IDimAttribute.HasMultipleValues


## Синтаксис


HasMultipleValues: Boolean;


## Описание


Свойство HasMultipleValues возвращает
 признак доступности множественной отметки элемента справочника.


## Комментарии


Свойство доступно только для чтения.


Допустимые значения:


	- True. Доступно множественное
	 значение элемента;


	- False. Не доступно множественное
	 значение элемента.


## Пример


Для выполнения примера предполагается наличие календарного справочника
 с идентификатором «D_CALENDAR», содержащего атрибут с идентификатором
 «ATTR».


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    mb: IMetabase;

    dimension: IDimensionModel;

    attribute: IDimAttribute;

    attributes: IDimAttributes;

Begin

    mb := MetabaseClass.Active;

    dimension := mb.ItemById("D_CALENDAR").Edit As IDimensionModel;

    attributes := dimension.Attributes;

    attribute := attributes.FindById("ATTR");

    If attribute.HasMultipleValues = True Then

        Debug.WriteLine("Доступно множественное значение элемента.");

        Else

            Debug.WriteLine("Не доступно множественное значение элемента.");

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен результат проверки,
 доступно ли для элемента справочника множественное значение.


См. также:


[IDimAttribute](IDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
