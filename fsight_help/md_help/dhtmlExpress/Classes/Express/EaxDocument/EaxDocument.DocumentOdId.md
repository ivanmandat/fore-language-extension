# EaxDocument.DocumentOdId

EaxDocument.DocumentOdId
-


**


# EaxDocument.DocumentOdId


## Синтаксис


DocumentOdId: String


## Описание


Свойство DocumentOdId** содержит идентификатор документа экспресс-отчета.


## Комментарии


Значение свойства можно установить из JSON и с помощью метода getDocumentOdid, а возвратить с помощью метода getDocumentOdId.


Свойство содержит строковый идентификатор вида {идентификатор_сессии}!{идентификатор_объекта} для документа экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим идентификатор документа экспресс-отчета и сведения о нем:


// Получаем документ экспресс-отчета
var eaxDocument = expressBox.getSource();
// Получим идентфикатор документа экспресс-отчета
console.log("Идентификатор документа: " + eaxDocument.getDocumentOdId().id);
// Получим сведения о документе экспресс-отчета
var state = eaxDocument.getDocumentMetadata();
console.log("Экспресс-отчет был изменен: " + state.dirty);
console.log("Количество листов в документе: " + state.sheets.its.it.length);

В результате выполнения примера в консоли браузера будут выведены идентификатор документа экспресс-отчета, признак его изменения и количество листов в документе:


Идентификатор документа: OJFBNIEELMOBEOAEOMLPNJALMHBFIGBEMJDJEPHGFGEHKOGK!M!S!EJICHGAFELMOBEOAEDPKOEAAPFNKPBFKEPJBGAKIIPABJFLFA

Экспресс-отчет был изменен: false


Количество листов в документе: 1.


См. также:


[EaxDocument](EaxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
