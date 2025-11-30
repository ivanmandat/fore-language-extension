# IMetaAttributeSetting.ShowAttribute

IMetaAttributeSetting.ShowAttribute
-


# IMetaAttributeSetting.ShowAttribute


## Синтаксис


ShowAttribute(Attribute: String): Boolean;


## Параметры


Attribute. Идентификатор атрибута
 показателя, для которого необходимо определить видимость.


## Описание


Свойство ShowAttribute определяет
 видимость указанного атрибута справочника НСИ в раскрывающемся списке
 значений атрибута базы данных временных рядов.


## Комментарии


Данное свойство применимо для атрибутов базы данных временных рядов,
 ссылающихся на справочники НСИ.


По умолчанию для атрибута отображается значение атрибута «Наименование».
 Если у компонента свойству [ShowColumnHeaders](../IMetaAttributesBreadcrumb/IMetaAttributesBreadcrumb.ShowColumnHeaders.htm)
 установлено значение True, то
 с помощью свойства ShowAttribute
 можно определить видимость дополнительных атрибутов. В качестве значения
 параметра Attribute необходимо
 указывать идентификатор требуемого атрибута, определенный в соответствующем
 справочнике НСИ.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1».
 Компонент «MetaAttributesBreadcrumb1» настроен на отображение данных базы
 данных временных рядов. База данных временных рядов имеет в своей структуре
 атрибут «COUNTRY», ссылающийся на справочник стран.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Setts: IMetaAttributeSettings;

	    Setting: IMetaAttributeSetting;

	Begin

	    MetaAttributesBreadcrumb1.ShowColumnHeaders := True;

	    Setts := MetaAttributesBreadcrumb1.MetaAttributeSettings;

	    Setting := Setts.FindById("COUNTRY");

	    Setting.ShowAttribute("NAME") := True;

	    Setting.ShowAttribute("CODE") := True;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента «MetaAttributesBreadcrumb1»
 будет включено отображение заголовков столбцов в раскрывающемся списке
 атрибутов. Для атрибута «COUNTRY» будет включено отображение атрибутов
 справочника «Name» и «Code».


См. также:


[IMetaAttributeSetting](IMetaAttributeSetting.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
