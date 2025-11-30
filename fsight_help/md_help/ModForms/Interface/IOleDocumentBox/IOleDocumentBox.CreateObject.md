# IOleDocumentBox.CreateObject

IOleDocumentBox.CreateObject
-


# IOleDocumentBox.CreateObject


## Синтаксис


CreateObject(ClassName: String);


## Параметры


ClassName.
 Программный идентификатор создаваемого
 COM-объекта.


## Описание


Метод CreateObject создает и
 помещает в компонент экземпляр указанного COM-объекта.


## Комментарии


Программный идентификатор приложения, указываемый в параметре ClassName, может быть получен из
 реестра операционной системы: в разделе HKEY_CLASSES_ROOT\CLSID
 необходимо найти глобальный уникальный идентификатор создаваемого COM-объекта.
 Наименование COM-объекта является значением по умолчанию для раздела глобального
 уникального идентификатора. В найденном разделе будет расположен подраздел
 ProgID, значение по умолчанию
 которого является программным идентификатором приложения.


Метод CreateObject может применяться
 только для тех COM-объектов, которые не имеют собственного окна.


Примечание.
 При динамическом создании компонента [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm)
 использование метода CreateObject
 доступно только после задания для компонента свойства [Parent](../IControl/IControl.Parent.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 компонент Button с наименованием
 Button1 и компонента OleDocumentBox
 с наименованием OleDocumentBox1.


Пример является обработчиком события OnClick для компонента с наименованием
 Button1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    OleDocumentBox1.CreateObject("Excel.Sheet");

End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку в компоненте с
 наименованием OleDocumentBox1 будет создан и загружен лист Microsoft Excel.


См. также:


[IOleDocumentBox](IOleDocumentBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
