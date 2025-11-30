# IUiMap.Map

IUiMap.Map
-


# IUiMap.Map


## Синтаксис


Map: [IMap](../IMap/IMap.htm);


## Описание


Свойство Map определяет карту,
 к которой необходимо получить доступ.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button
 и UiMap с наименованиями Button1 и UiMap1 соответственно.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MBObj: IMetabaseObjectDescriptor;

	    Topobase: IMapTopobase;

	Begin

	    MB := MetabaseClass.Active;

	    MBObj := MB.ItemById("KARTA_RF");

	    Topobase := MBObj.Bind As IMapTopobase;

	    UiMap1.Map.Topobase := Topobase;

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку, к компоненту UiMap1
 будет подключена карта, топооснова которой содержится в объекте репозитория
 карта с идентификатором «KARTA_RF».


См. также:


[IUiMap](IUiMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
