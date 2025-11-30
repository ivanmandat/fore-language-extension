# IAdhocSlide.Duplicate

IAdhocSlide.Duplicate
-


# IAdhocSlide.Duplicate


## Синтаксис


Duplicate: [IAdhocSlide](IAdhocSlide.htm);


## Описание


Метод Duplicate дублирует слайд.


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором DASHBOARD, в котором содержатся хотя бы три [слайда](UiAdhoc.chm::/Presentation/Presentation.htm).


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dashboard: IAdhocReport;

    Slides: IAdhocSlides;

    Slide: IAdhocSlide;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим аналитическую панель

    MObj := MB.ItemById("DASHBOARD").Edit;

    Dashboard := MObj As IAdhocReport;

    // Получим коллекцию слайдов

    Slides := Dashboard.Slides;

    // Продублируем третий слайд

    Slide := Slides.Item(2);

    Slide.Duplicate;

    // Сохраним изменения

    MObj.Save;

End Sub UserProc;


После выполнения примера в аналитической панели будет добавлена копия
 третьего слайда.


См. также:


[IAdhocSlide](IAdhocSlide.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
