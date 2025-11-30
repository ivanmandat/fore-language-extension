# TabObjectChangeEventArgs.CreateObjectChangeArgs

TabObjectChangeEventArgs.CreateObjectChangeArgs
-


# TabObjectChangeEventArgs.CreateObjectChangeArgs


## Синтаксис


CreateObjectChangeArgs(TabSheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);
 Object: [ITabObject](../../Interface/ITabObject/ITabObject.htm);
 Type: [TabObjectChangeType](../../Enums/TabObjectChangeType.htm));


## Параметры


TabSheet. Компонент, для которого
 генерируется событие;


Object. Объект, для которого
 генерируется событие;


Type. Тип изменения, которое
 происходит с объектом.


## Описание


Конструктор CreateObjectChangeArgs
 создаёт аргумент события, возникающего при изменении объекта.


## Комментарии


По умолчанию аргументы события генерируются автоматически при наступлении
 события. Конструктор требуется для вызова события вручную. Подробнее о
 ручной генерации событий вы можете узнать в разделе «[Генерация
 событий вручную](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000027.htm)».


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- TabSheetBox с идентификатором «TabSheetBox1». Для данного компонента
	 должен быть назначен обработчик события [OnAfterObjectChange](../TabSheetBox/TabSheetBox.OnAfterObjectChange.htm).


	- UiReport с идентификатором «UiReport1», являющийся источником
	 данных для «TabSheetBox1». Также «UiReport1» должен быть активен и
	 содержать загруженный регламентный отчет с фигурами на активном листе.


			Sub UserProc;

Var

    Tab: ITabSheet;

    Object: ITabObject;

    Argument: TabObjectChangeEventArgs;

Begin

    Tab := TabSheetBox1.Source.GetTabSheet;

    Object := Tab.Objects.Item(0);

    Argument := New TabObjectChangeEventArgs.CreateObjectChangeArgs(TabSheetBox1, Object, TabObjectChangeType.Angle);

    TabSheetBox1.OnAfterObjectChange(TabSheetBox1, Argument);

End Sub UserProc;


В результате выполнения процедура вызовет событие [OnAfterObjectChange](../TabSheetBox/TabSheetBox.OnAfterObjectChange.htm)
 в компоненте «TabSheetBox1».


См. также:


[TabObjectChangeEventArgs](TabObjectChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
