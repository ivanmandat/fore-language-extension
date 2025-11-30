# IUserDimAttribute.HasHierarchy

IUserDimAttribute.HasHierarchy
-


# IUserDimAttribute.HasHierarchy


## Синтаксис


HasHierarchy: Boolean;


## Описание


Свойство HasHierarchy определяет,
 используется ли атрибут в качестве альтернативной иерархии.


## Комментарии


Допустимые значения:


	- True. Атрибут используется
	 в качестве альтернативной иерархии;


	- False. Атрибут не используется
	 в качестве альтернативной иерархии.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 справочника с идентификатором «DIM_CALCULATED», который содержит атрибут
 с идентификатором «NAME».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    userDim: IUserDimension;

    attrs: IUserDimAttributes;

    attr: IUserDimAttribute;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим вычисляемый справочник

    userDim := MB.ItemById("DIM_CALCULATED").Edit As IUserDimension;

    // Получим коллекцию атрибутов

    attrs := userDim.Attributes;

    // Получим атрибут «Name»

    attr := attrs.Item("NAME");

    // Установим атрибут
 в качестве альтернативной иерархии

    attr.HasHierarchy := True;

    // Сохраним изменения

    (userDim As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера атрибут будет использоваться в качестве альтернативной
 иерархии.


См. также:


[IUserDimAttribute](IUserDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
