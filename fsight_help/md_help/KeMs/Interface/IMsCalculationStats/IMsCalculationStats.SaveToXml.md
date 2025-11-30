# IMsCalculationStats.SaveToXml

IMsCalculationStats.SaveToXml
-


# IMsCalculationStats.SaveToXml


## Синтаксис


SaveToXml(Xml: [IXmlDomElement](ModXml.chm::/develop.htm));


## Параметры


Xml. XML-файл, в котором будут
 сохранены статистики расчёта.


## Описание


Метод SaveToXml сохраняет дерево
 статистик в XML-файл.


## Комментарии


Используется при сравнении статистик расчёта с помощью метода [IMsCalculationStats.Compare](IMsCalculationStats.Compare.htm).


Для загрузки статистик расчёта из XML-файла используйте метод [IMsCalculationStats.LoadFromXml](IMsCalculationStats.LoadFromXml.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL, в котором создана задача моделирования
 с идентификатором PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms, Xml.


			Sub UserProc;

Var

    Mb: IMetabase;

    Problem: IMsProblem;

    Settings: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

    Doc: IXMLDOMDocument3;

    Elem: IXmlDomElement;

Begin

    Mb := MetabaseClass.Active;

    // Получим задачу моделирования

    Problem := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("CONT_MODEL")).EditTemporary As IMsProblem;

    Settings := Problem.CreateCalculationSettings;

    // Зададим детализацию статистик расчета

    Settings.StatsLevel := MsCalculationStatsLevel.Basic;

    Calc := Problem.Calculate(Settings);

    // Рассчитаем задачу моделирования и статистики расчёта

    Calc.Run;

    // Сохраним статистику в XML-файл

    Doc := New FreeThreadedDOMDocument60.Create;

    Elem := doc.createElement("Stats");

    Doc.appendChild(Elem);

    Calc.Stats.SaveToXml(Elem);

    Doc.Save("D:\Work\Stats.xml");

End Sub UserProc;


В результате выполнения примера будет запущен расчёт указанной задачи
 моделирования. Статистика расчёта будет сохранена в файл «Stats.xml».


См. также:


[IMsCalculationStats](IMsCalculationStats.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
