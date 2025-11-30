# ICompoundDimensionSource.ForcedHideSourceName

ICompoundDimensionSource.ForcedHideSourceName
-


# ICompoundDimensionSource.ForcedHideSourceName


## Синтаксис


ForcedHideSourceName: Boolean;


## Описание


Свойство ForcedHideSourceName
 возвращает возможность скрытия имени источника в составном справочнике.


## Комментарии


Допустимые значения:


	- True. Название источника
	 скрыто;


	- False. Название источника
	 отображается. Значение по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS. В экспресс-отчёте несколько источников. [Отображение названия
 первого источника](UIExpress.chm::/purpose/DS_structure.htm) отключено.


Добавьте ссылки на системные сборки: Dimension, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Obj: IMetabaseObject;

    Discr: IMetabaseObjectDescriptor;

    CompoundDim: ICompoundDimension;

    Source: ICompoundDimensionSource;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт и частные измерения

    obj := MB.ItemById("EXPRESS").Edit;

    Discr := obj.Children.Item(0);

    CompoundDim := Discr.Children.Item(0).Edit As ICompoundDimension;

    Source := CompoundDim.Sources.Item(0);

    // Выведем, отображается ли название у первого источника

    Debug.WriteLine("Отображение названия источника " + Source.Name + " скрыто:");

    Debug.Indent;

    Debug.WriteLine(Source.ForcedHideSourceName);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено сообщение,
 что отображение первого источника скрыто.


См. также:


[ICompoundDimensionSource](ICompoundDimensionSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
