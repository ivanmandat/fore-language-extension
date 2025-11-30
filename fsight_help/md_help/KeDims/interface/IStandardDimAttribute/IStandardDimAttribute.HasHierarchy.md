# IStandardDimAttribute.HasHierarchy

IStandardDimAttribute.HasHierarchy
-


# IStandardDimAttribute.HasHierarchy


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


Для выполнения примера в репозитории предполагается наличие табличного
 справочника с идентификатором «DIM_SEP», содержащего атрибут с идентификатором
 «NAME».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    standardDim: IStandardDimension;

    attrs: IStandardDimAttributes;

    attr: IStandardDimAttribute;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим табличный справочник

    standardDim := MB.ItemById("DIM_SEP").Edit As IStandardDimension;

    // Получим коллекцию атрибутов

    attrs := standardDim.Attributes;

    // Получим атрибут «Name»

    attr := attrs.Item("NAME");

    // Установим атрибут
 в качестве альтернативной иерархии

    attr.HasHierarchy := True;

    // Сохраним изменения

    (standardDim As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера указанный атрибут будет использоваться в качестве
 альтернативной иерархии.


См. также:


[IStandardDimAttribute](IStandardDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
