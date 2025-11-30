# TabBeforeObjectAngleChangeEventArgs.Create

TabBeforeObjectAngleChangeEventArgs.Create
-


# TabBeforeObjectAngleChangeEventArgs.Create


## Синтаксис


TabBeforeObjectAngleChangeEventArgs(TabSheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);

                       Object:
 [ITabObject](../../Interface/ITabObject/ITabObject.htm);

                       Type:
 [TabObjectChangeType](../../Enums/TabObjectChangeType.htm);


                       Angle:
 Double;


                       Cancel:
 Boolean);


## Параметры


TabSheet. Компонент, для которого
 генерируется событие;


Object. Объект, для которого
 генерируется событие;


Type. Тип изменения, которое
 происходит с объектом;


Angle. Угол, на который был
 повёрнут объект;


Cancel. Признак того, отменять
 ли вращение объекта.


## Описание


Конструктор Create создаёт аргумент
 события, возникающего при вращении объекта.


## Комментарии


По умолчанию аргументы события генерируются автоматически при наступлении
 события. Конструктор требуется для вызова события вручную. Подробнее о
 ручной генерации событий вы можете узнать в разделе «[Генерация
 событий вручную](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000027.htm)».


Значение параметра Angle
 всегда положительное и отсчитывается по часовой стрелке. Например,
 если объект повернули по часовой стрелке на 15 градусов, то параметр должен
 принимать значение 15, а если повернули на 15 градусов против часовой
 стрелки - то значение 345.


Допустимые значения параметра Cancel:


	- True. Вращение объекта
	 будет отменено;


	- False. Вращение объекта
	 будет выполнено.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- TabSheetBox с идентификатором
	 «TabSheetBox1». Для данного компонента должен быть назначен обработчик
	 события [OnBeforeObjectChange](../TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm).


	- UiReport с идентификатором
	 «UiReport1», являющийся источником данных для «TabSheetBox1». Также
	 «UiReport1» должен быть активен и содержать загруженный регламентный
	 отчет с фигурами на активном листе.


			Sub UserProc;

Var

    Tab: ITabSheet;

    Object: ITabObject;

    Argument: TabBeforeObjectAngleChangeEventArgs;

Begin

    Tab := TabSheetBox1.Source.GetTabSheet;

    Object := Tab.Objects.Item(0);

    Argument := New TabBeforeObjectAngleChangeEventArgs.Create(TabSheetBox1, Object, TabObjectChangeType.Angle, 15, False);

    TabSheetBox1.OnBeforeObjectChange(TabSheetBox1, Argument);

End Sub UserProc;


В результате выполнения процедура вызовет событие [OnBeforeObjectChange](../TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm)
 в компоненте «TabSheetBox1».


См. также:


[TabBeforeObjectAngleChangeEventArgs](TabBeforeObjectAngleChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
