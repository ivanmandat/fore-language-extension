# MetaSource.getAttributes

MetaSource.getAttributes
-


# MetaSource.getAttributes


## Синтаксис


getAttributes();


## Описание


Метод getAttributes возвращает
 атрибуты метаданных модели.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта типа
 [MetaTree](../../PP_Ufe_Ui/MetaTree/MetaTree.htm) с наименованием
 «metaTree» (см. «[Конструктор
 MetaTree](../../PP_Ufe_Ui/MetaTree/Constructor_MetaTree.htm)»). Добавляем метаданные к модели и получаем наименования
 атрибутов:


// Получаем модель дерева метаданных
var metaSource = metaTree.getSource();
// Добавляем метаданные
PP.Ufe.MetaSource.base.setMetadata.call(metaSource, expressBox.getSource().getDims()[0].getMetadata());
// Получаем наименования атрибутов
console.log("Атрибуты метаданных модели:");
var attrs = metaSource.getAttributes();
for (var i in attrs) {
    console.log(attrs[i].n);
}
В результате в консоль были выведены наименования атрибутов метаданных
 модели:


Атрибуты метаданных модели:


Наименование


Идентификатор


Порядок


См. также:


[MetaSource](MetaSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
