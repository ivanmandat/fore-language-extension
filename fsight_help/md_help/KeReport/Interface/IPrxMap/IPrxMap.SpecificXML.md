# IPrxMap.SpecificXML

IPrxMap.SpecificXML
-


# IPrxMap.SpecificXML


## Синтаксис


SpecificXML: String;


## Описание


Свойство SpecificXML определяет
 отображаемый фрагмент топоосновы в формате XML.


## Комментарии


Отображаемый фрагмент топоосновы должен являться частью исходной топоосновы.
 Для получения исходной топоосновы используйте свойство [IPrxMap.OriginalTopobase](IPrxMap.OriginalTopobase.htm).


Для сброса отображаемой топоосновы задайте для свойства SpecificXML
 пустое значение.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «PRX_MAP». Данный отчет должен содержать карту
 на активном листе.


В модуле подключите системные сборки: Metabase, Report, Tab, Topobase.


Для примера используется карта [Russian Federation_regions(RUS).tbs](Russian%20Federation_regions(RUS).zip).


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Tab: ITabSheet;

    Map: IPrxMap;

    Topo, SpecTopo: ITopobase;

    Tree: String;

Begin

    // Получаем текущий
 репозиторий

    MB := MetabaseClass.Active;

    // Получаем отчет

    MObj := MB.ItemById("PRX_MAP").Edit;

    // Получаем карту

    Report := MObj As IPrxReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Map := Tab.Objects.Item(0).Extension As IPrxMap;

    // Получаем топооснову

    Topo := Map.OriginalTopobase As ITopobase;

    // Получаем дерево-структуру топоосновы

    Tree := Topo.Tree;

    // Выводим её в окно консоли

    Debug.WriteLine(Tree);

    // Задаем новое дерево-структуру для топоосновы

    Tree := "<Topobase><Layer Name=" + """" + "RootLayer" + """" + " Id=" + """" + "1" + """" +

        "><Layer Name=" + """" + "Regions" + """" + " Id=" + """" + "2" + """" +

        "><Shape Name=" + """" + "Республика Адыгея" + """" + " Id=" + """" + "135" + """" + "/></Layer></Layer></Topobase>";

    // Отображаем новую структуру на карте

    Map.SpecificXML := Tree;

    // Автоматически масштабируем карту

    Map.AutoScaled := True;

    // Сохраняем изменения

    MObj.Save;

End Sub UserProc;


В результате выполнения примера в отчете будет отображен масштабированный
 фрагмент исходной карты.


См. также:


[IPrxMap](IPrxMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
