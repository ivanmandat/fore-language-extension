# IMsMetaModelVisualController.ExtendRubricatorPeriod

IMsMetaModelVisualController.ExtendRubricatorPeriod
-


# IMsMetaModelVisualController.ExtendRubricatorPeriod


## Синтаксис


ExtendRubricatorPeriod(StartDate: DateTime; EndDate:
 DateTime);


## Параметры


StartDate. Дата начала календаря;


EndDate. Дата окончания календаря.


## Описание


Метод ExtendRubricatorPeriod
 расширяет границы календаря внутренней БД временных рядов.


## Комментарии


По умолчанию календарь внутренней БД временных рядов начинается в 1980
 году и заканчивается в 2020 году.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором «MS», содержащий задачу моделирования
 с идентификатором «FILLMODEL». Данная задача должна содержать внутреннюю
 метамодель, содержащую внутреннюю БД временных рядов и модель.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub ExtendRubricatorPeriod;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    pr: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    StartDate, EndDate: DateTime;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем задачу моделирования

    pr := mb.ItemByIdNamespace("FILLMODEL", MsObj.Key).Bind As IMsProblem;

    // Получаем метамодель

    Meta := pr.MetaModel;

    MetaVisual := Meta.VisualController;

    StartDate := DateTime.Parse("01.01.1970");

    EndDate := DateTime.Parse("01.01.2020");

    MetaVisual.ExtendRubricatorPeriod(StartDate, EndDate);

End Sub ExtendRubricatorPeriod;


Результат выполнения примера: будут расширены границы календаря для
 внутренней БД временных рядов метамодели.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
