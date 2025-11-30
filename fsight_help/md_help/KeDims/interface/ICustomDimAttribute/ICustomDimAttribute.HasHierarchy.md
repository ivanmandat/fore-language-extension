# ICustomDimAttribute.HasHierarchy

ICustomDimAttribute.HasHierarchy
-


# ICustomDimAttribute.HasHierarchy


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


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 «CUBE_SEP_PARAMS». Определите список фактов и их иерархию для куба, не
 используя существующий справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    cube: IStandardCube;

    customdim: ICustomDimension;

    attrs: ICustomDimAttributes;

    attr: ICustomDimAttribute;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим куб

    cube := mb.ItemById("CUBE_SEP_PARAMS").Edit As IStandardCube;

    // Получим измерение фактов

    customdim := cube.FactDimension.Dimension As ICustomDimension;

    // Получим коллекцию атрибутов измерения

    attrs := customdim.Attributes;

    // Получим атрибут измерения фактов «Порядок»

    attr := attrs.Order;

    // Установим атрибут
 в качестве альтернативной иерархии

    attr.HasHierarchy := True;

    // Сохраним изменения

    (customDim As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера измерения фактов будет использоваться в качестве
 альтернативной иерархии.


См. также:


[ICustomDimAttribute](ICustomDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
