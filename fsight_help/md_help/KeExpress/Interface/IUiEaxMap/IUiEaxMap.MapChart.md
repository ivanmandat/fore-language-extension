# IUiEaxMap.MapChart

IUiEaxMap.MapChart
-


# IUiEaxMap.MapChart


## Синтаксис


MapChart: [IEaxMapChart](../IEaxMapChart/IEaxMapChart.htm);


## Описание


Свойство MapChart возвращает
 параметры карты, к которой компонент предоставляет доступ.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента UiEaxMap с наименованием «UiEaxMap1» и какого-либо визуального
 компонента, для которого «UiEaxMap1» установлен в качестве источника данных.
 В репозитории должна быть топооснова карты с идентификатором «T_WORLD».


			Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

Var

    MB: IMetabase;

    WorldMap: IEaxMapChart;

Begin

    MB := MetabaseClass.Active;

    WorldMap := UiEaxMap1.MapChart;

    WorldMap.Topobase := MB.ItemById("T_WORLD").Bind As ITopobase;

End Sub TESTFormOnCreate;


При запуске формы к компоненту «UiEaxMap1» будет подключена указанная
 карта.


См. также:


[IUiEaxMap](IUiEaxMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
