# IDimAttribute.ObjectLinked

IDimAttribute.ObjectLinked
-


# IDimAttribute.ObjectLinked


## Синтаксис


ObjectLinked: Boolean;


## Описание


Свойство ObjectLinked возвращает
 признак, является ли атрибут справочника ссылкой на объект репозитория.


## Комментарии


Свойство доступно только для чтения.


Допустимые значения:


	- True. Атрибут является
	 ссылкой на объект репозитория;


	- False. Атрибут не является
	 ссылкой на объект репозитория.


Для включения признака «Атрибут является ссылкой на объект репозитория»
 используйте свойство [IRdsAttribute.ObjectLinked](KeRds.chm::/Interface/IRdsAttribute/IRdsAttribute.ObjectLinked.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «DIM», содержащего атрибут с идентификатором «ATTR».


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    dimension: IDimensionModel;

    attribute: IDimAttribute;

    attributes: IDimAttributes;

Begin

    MB := MetabaseClass.Active;

    dimension := mb.ItemById("DIM").Bind As IDimensionModel;

    attributes := dimension.Attributes;

    attribute := attributes.FindById("ATTR");

    If attribute.ObjectLinked = True Then

        Debug.WriteLine("Атрибут является ссылкой на объект репозитория");

        Else

            Debug.WriteLine("Атрибут не является ссылкой на объект репозитория");

    End If;

End Sub UserProc;


В результате выполнения примера будет произведена проверка, является
 ли заданный атрибут справочника ссылкой на объект репозитория, результат
 проверки будет выведен в окно консоли.


См. также:


[IDimAttribute](IDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
