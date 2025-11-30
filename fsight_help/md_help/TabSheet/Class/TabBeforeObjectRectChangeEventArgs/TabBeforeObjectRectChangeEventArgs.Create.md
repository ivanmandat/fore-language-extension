# TabBeforeObjectRectChangeEventArgs.Create

TabBeforeObjectRectChangeEventArgs.Create
-


# TabBeforeObjectRectChangeEventArgs.Create


## Синтаксис


TabBeforeObjectAngleChangeEventArgs(TabSheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);

                       Object:
 [ITabObject](../../Interface/ITabObject/ITabObject.htm);

                       Type:
 [TabObjectChangeType](../../Enums/TabObjectChangeType.htm);


                       Value:
 [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);


                       Cancel:
 Boolean);


## Параметры


TabSheet. Компонент, для которого
 генерируется событие;


Object. Объект, для которого
 генерируется событие;


Type. Тип изменения, которое
 происходит с объектом;


Value. Новое положение и размер
 объекта;


Cancel. Признак того, отменять
 ли вращение объекта.


## Описание


Конструктор Create создаёт аргумент
 события, возникающего до перемещения объекта или изменения его размеров.


## Комментарии


По умолчанию аргументы события генерируются автоматически при наступлении
 события. Конструктор требуется для вызова события вручную. Подробнее о
 ручной генерации событий вы можете узнать в разделе «[Генерация
 событий вручную](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000027.htm)».


Допустимые значения параметра Cancel:


	- True. Перемещение или
	 изменение размеров объекта будет отменено;


	- False. Перемещение или
	 изменение размеров объекта будет выполнено.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- TabSheetBox с идентификатором
	 «TabSheetBox1». Для данного компонента должен быть назначен обработчик
	 события [OnBeforeObjectChange](../TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm).


	- UiReport с идентификатором
	 «UiReport1», являющийся источником данных для «TabSheetBox1». Также
	 «UiReport1» должен быть активен и содержать загруженный регламентный
	 отчет с фигурами на активном листе.


Добавьте ссылку на системную сборку Drawing.


			Sub UserProc;

Var

    Tab: ITabSheet;

    tObject: ITabObject;

    Rect: IGxRectF;

    Argument: TabBeforeObjectRectChangeEventArgs;

Begin

    Tab := TabSheetBox1.Source.GetTabSheet;

    tObject := Tab.Objects.Item(0);

    Rect := New GxRectF.Create(10, 10, 60, 60);

    Argument := New TabBeforeObjectRectChangeEventArgs.Create(TabSheetBox1, tObject, TabObjectChangeType.Rect, Rect, False);

    TabSheetBox1.OnBeforeObjectChange(TabSheetBox1, Argument);

End Sub UserProc;


В результате выполнения процедура вызовет событие [OnBeforeObjectChange](../TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm)
 в компоненте «TabSheetBox1».


См. также:


[TabBeforeObjectRectChangeEventArgs](TabBeforeObjectRectChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
