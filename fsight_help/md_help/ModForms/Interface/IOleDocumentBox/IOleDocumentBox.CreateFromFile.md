# IOleDocumentBox.CreateFromFile

IOleDocumentBox.CreateFromFile
-


# IOleDocumentBox.CreateFromFile


## Синтаксис


CreateFromFile(FileName: String);


## Параметры


FileName. Путь к файлу, содержащему создаваемый COM-объект.


## Описание


Метод CreateFromFile создает и помещает в компонент COM-объект, позволяющий работать с файлом, путь к которому передается в качестве входного параметра.


## Комментарии


Данный метод поддерживается для работы с файлами Microsoft Word и Microsoft Excel.


Примечание. При динамическом создании компонента [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm) использование метода CreateFromFile доступно только после задания для компонента свойства [Parent](../IControl/IControl.Parent.htm).


См. также:


[IOleDocumentBox](IOleDocumentBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
