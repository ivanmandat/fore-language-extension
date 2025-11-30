# ICompoundDimensionSources.ForcedHideSourceName

ICompoundDimensionSources.ForcedHideSourceName
-


# ICompoundDimensionSources.ForcedHideSourceName


## Синтаксис


ForcedHideSourceName: Boolean;


## Описание


Свойство ForcedHideSourceName
 управляет отображением названия составного справочника у нескольких источников
 данных.


## Комментарии


Допустимые значения:


True. В названии составного
 измерения отображаются названия источников данных;


False. Значение по умолчанию.
 Названия источников данных не отображаются.


Используется в экспресс-отчете при наличии нескольких источников данных.


В интерфейсе выведено в виде флажка «В
 виде составного
 измерения» на вкладке «Отметка»
 панели свойств в группе «Частные
 измерения».


## Пример


Для выполнения примера добавьте ссылку на системную сборку «Dimension».
 В репозитории предполагается наличие экспресс-отчета с идентификатором
 «EXPRESS_REPORT». У отчета должно быть несколько источников данных. Предварительно
 на вкладке «Отметка» панели свойств
 отчета в группе «Частные измерения» установите флажок «В виде
 составного измерения».


			Sub UserProc;

Var

    MB: IMetabase;

    obj : IMetabaseObjectDescriptor;

    CompoundDim: ICompoundDimension;

Begin

    MB := MetabaseClass.Active;

    obj :=  MB.ItemById("EXPRESS_REPORT").Children.Item(0).Children.Item(0).Edit;

    CompoundDim := obj As ICompoundDimension;

    CompoundDim.Sources.ForcedHideSourceName := True;

    obj.SaveDescriptor;

End Sub UserProc;


После выполнения примера в названии составного справочника отображается
 название источника данных.


См. также:


[ICompoundDimensionSources](ICompoundDimensionSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
