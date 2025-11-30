# IMetabaseObjectParamsBox.Object

IMetabaseObjectParamsBox.Object
-


# IMetabaseObjectParamsBox.Object


## Синтаксис


Object: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm);


## Описание


Свойство Object определяет объект
 репозитория, работа с параметрами которого осуществляется в компоненте.


## Комментарии


Объект, указываемый в данном свойстве, должен быть открыт на редактирование.
 После изменения списка параметров в компоненте для сохранения изменений
 необходимо у объекта вызвать метод [Save](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.Save.htm).


Если свойство Object задается
 в инспекторе объектов, то объект автоматически будет открыт на редактирование
 при запуске формы.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух кнопок с наименованиями «Button1» и «Button2» и компонента «MetabaseObjectParamsBox»
 с наименованием «MetabaseObjectParamsBox1». Также в репозитории должен
 существовать объект с идентификатором REPORT.


	Class TESTForm: Form

	    MetabaseObjectParamsBox1: MetabaseObjectParamsBox;

	    Button1: Button;

	    Button2: Button;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MB: IMetabase;

	    Begin

	        MB := MetabaseClass.Active;

	        MetabaseObjectParamsBox1.Object := MB.ItemById("REPORT").Edit;

	    End Sub Button1OnClick;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        MetabaseObjectParamsBox1.Object.Save;

	    End Sub Button2OnClick;


	End Class TESTForm;


При нажатии на кнопку «Button1» указанный объект будет подключен к компоненту
 MetabaseObjectParamsBox. После редактирования параметра и нажатия кнопки
 «Button2» все изменения параметров будут сохранены.


См. также:


[IMetabaseObjectParamsBox](IMetabaseObjectParamsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
