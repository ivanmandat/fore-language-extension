# ICustomDimAttributes.Remove

ICustomDimAttributes.Remove
-


# ICustomDimAttributes.Remove


## Синтаксис


Remove(Index: Variant): Boolean;


## Параметры


Index. Индекс
 атрибута.


## Описание


Метод Remove осуществляет удаление
 атрибута по индексу.


## Комментарии


Метод возвращает значение True,
 если атрибут был удален из коллекции и False,
 если удаление по каким-либо причинам невозможно. В случае удаления атрибутов
 с назначением [Идентификатор](ICustomDimAttributes.Id.htm),
 [Наименование](ICustomDimAttributes.Name.htm) или [Порядок](ICustomDimAttributes.Order.htm)
 необходим вместо них создать новые атрибуты или назначить уже существующие.
 Это требуется для сохранения работоспособности справочника.


См. также:


[ICustomDimAttributes](ICustomDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
