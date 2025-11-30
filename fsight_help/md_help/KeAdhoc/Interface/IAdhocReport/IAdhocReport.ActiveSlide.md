# IAdhocReport.ActiveSlide

IAdhocReport.ActiveSlide
-


# IAdhocReport.ActiveSlide


## Синтаксис


ActiveSlide: [IAdhocSlide](../IAdhocSlide/IAdhocSlide.htm);


## Описание


Свойство ActiveSlide определяет
 активный слайд аналитической панели.


## Комментарии


Для определения видимости слайда используйте свойство [IAdhocSlide.Visible](../IAdhocSlide/IAdhocSlide.Visible.htm).


## Пример


Для выполнения примера предполагается наличие аналитической панели с
 идентификатором «DASHBOARDAS».


Добавьте ссылки на системные сборки: AdHoc, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    mbo: IMetabaseObject;

    dashboard, dashboardA: IAdhocReport;

    slides, slidesA: IAdhocSlides;

    slide, slideA: IAdhocSlide;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем аналитическую панель

    mbo := MB.ItemById("DASHBOARDAS").Edit;

    dashboard := mbo As IAdhocReport;

    // Получаем слайды

    slides := dashboard.Slides;

    slides.RemoveByKey(2);

    // Добавляем слайд

    slides.InsertAfter(0, "Слайд2");

    // Делаем первый слайд скрытым

    dashboardA := slides.Report;

    slideA := dashboardA.ActiveSlide;

    slidesA := slideA.Slides;

    slidesA.Item(0).Visible := False;

    // Сохраняем отчет

    mbo.Save;

End Sub UserProc;


В результате выполнения примера в аналитическую панель будет добавлен
 слайд и первый активный слайд будет сделан скрытым.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
