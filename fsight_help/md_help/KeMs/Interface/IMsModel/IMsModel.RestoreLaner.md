# IMsModel.RestoreLaner

IMsModel.RestoreLaner
-


# IMsModel.RestoreLaner


## Синтаксис


RestoreLaner(Laner: [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm));


## Параметры


Laner. Рабочая
 область базы данных временных рядов.


## Описание


Метод RestoreLaner восстанавливает
 рабочую область базы данных временных рядов из модели.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором Button1, компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием UiErAnalyzer1, являющегося источником данных
 для TabSheetBox. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов с идентификатором OBJ_RUBRICATOR. В данной
 базе данных временных рядов должен присутствовать контейнер моделирования,
 содержащий модель с идентификатором OBJ_MODEL, основанную на показателях
 базы данных временных рядов.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ErAn: IEaxAnalyzer;

    Laner: ILaner;

    ActiveMetabase: IMetabase;

    Pok, Cont: IMetabaseObjectDescriptor;

    Model: IMsModel;

Begin

    ActiveMetabase := MetabaseClass.Active;

    Pok := ActiveMetabase.ItemById("OBJ_RUBRICATOR");

    Cont := (Pok.Bind As IRubricator).ModelSpace;

    Model := ActiveMetabase.FetchItemById("OBJ_MODEL", Cont.Key).Edit As IMsModel;

    ErAn := UiErAnalyzer1.ErAnalyzer;

    Laner := ErAn.Laner;

    Model.RestoreLaner(Laner);

End Sub Button1OnClick;


При нажатии кнопки Button1 в рабочую область базы данных временных рядов
 будут восстановлены ряды из модели OBJ_MODEL.


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
