# Breadcrumb.getContentDomNode

Breadcrumb.getContentDomNode
-


# Breadcrumb.getContentDomNode


## Синтаксис


getContentDomNode();


## Описание


Метод getContentDomNode возвращает
 DOM-вершину для содержимого компонента [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm).


## Комментарии


Метод возвращает объект типа HTMLElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm) с
 наименованием «bread» (см. [Пример
 создания компонента Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm)). Установим для текста внутри компонента
 полужирное начертание:


// Получаем DOM-вершину для содержимого компонента Breadcrumb
var contentDomNode = bread.getContentDomNode();
// Устанавливаем для текста полужирное начертание
contentDomNode.style.fontWeight = "bold";
В результате выполнения примера для текста внутри компонента [Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm)
 было установлено полужирное начертание:


![](Breadcrumb_getContentDomNode.png)


[Breadcrumb](Breadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
