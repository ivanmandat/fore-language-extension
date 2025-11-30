# ITopobase.Tree

ITopobase.Tree
-


# ITopobase.Tree


## Синтаксис


Tree: string;


## Описание


Свойство Tree возвращает
 дерево-структуру топоосновы.


## Комментарии


Используя дерево-структуру с помощью метода [ITopobase.GetSpecificTopobase](ITopobase.GetSpecificTopobase.htm)
 можно создавать пользовательские топоосновы на базе существующих топооснов.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 MapBox с идентификатором MapBox1 и компонента UiMap с идентификатором
 UiMap1. В компонент UiMap1 должна быть загружена карта и он должен являться
 источником данных для компонента MapBox1.


Добавьте ссылку на системную сборку Topobase.


В примере используется карта [Russian_Federation_regions(RUS).tbs](Russian_Federation_regions(RUS).zip).


			Sub UserProc;

Var

    Map: IMap;

    Topo, SpecTopo: ITopobase;

    Tree: String;

Begin

    // Получаем карту

    Map := UiMap1.Map;

    // Получаем топооснову

    Topo := Map.Topobase As ITopobase;

    // Получаем дерево-структуру топоосновы

    Tree := Topo.Tree;

    // Выводим её в окно консоли

    Debug.WriteLine(Tree);

    // Задаем новое дерево-структуру для топоосновы

    Tree := "<Topobase><Layer Name=" + """" + "RootLayer" + """" + " Id=" + """" + "1" + """" +

        "><Layer Name=" + """" + "Regions" + """" + " Id=" + """" + "2" + """" +

        "><Shape Name=" + """" + "Республика Адыгея" + """" + " Id=" + """" + "135" + """" + "/></Layer></Layer></Topobase>";

    // Получаем топооснову на базе нового дерева-структуры

    SpecTopo := Topo.GetSpecificTopobase(Tree, True);

    // Отображаем новую топооснову в компоненте UiMap1

    Map.Topobase := SpecTopo As IMapTopobase;

End Sub UserProc;


В результате выполнения примера в компоненте UiMap1 будет отображен
 масштабированный фрагмент исходной карты.


См. также:


[ITopobase](ITopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
