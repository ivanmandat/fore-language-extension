# ICompoundDimensionSources.ShowSourceName

ICompoundDimensionSources.ShowSourceName
-


# ICompoundDimensionSources.ShowSourceName


## Синтаксис


ShowSourceName:
 Boolean;


## Описание


Свойство ShowSourceName определяет
 признак отображения наименований источников в наименованиях элементов
 составного справочника.


## Комментарии


Допустимые значения:


	- True. Всегда отображать
	 наименование источника в наименованиях элементов составного справочника;


	- False. Значение по умолчанию.
	 Если в источниках все фиксированные измерения различны (в основе измерений
	 лежат разные справочники), то наименования источников в наименованиях
	 элементов не отображаются. Если в источниках имеется хотя бы одно
	 совпадающее фиксированное измерение (в основе измерений разных источников
	 лежит один справочник), то наименования источников будут отображены
	 в наименованиях элементов составного справочника. При этом отображаются
	 наименования только тех источников, измерения которых совпали.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором «VirtCube».


Sub UserProc;

Var

    MB: IMetabase;

    VCube: IVirtualCube;

    Dimension: ICompoundDimension;

Begin

    Mb := MetabaseClass.Active;

    VCube := MB.ItemById("VirtCube").Edit As IVirtualCube;

    Dimension := VCube.FactDimension As ICompoundDimension;

    Dimension.Sources.ShowSourceName := True;

    (VCube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будут изменены параметры измерения фактов виртуального
 куба: в наименованиях элементов всегда будут отображаться наименования
 источников.


См. также:


[ICompoundDimensionSources](ICompoundDimensionSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
