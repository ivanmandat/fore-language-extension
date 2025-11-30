# IBreadcrumb.EndUpdate

IBreadcrumb.EndUpdate
-


# IBreadcrumb.EndUpdate


## Синтаксис


EndUpdate;


## Описание


Метод EndUpdate возобновляет перерисовку связанных компонентов.


## Комментарии


Метод актуален, если он вызывается из компонента-потомка [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm), связанного с компонентом [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm). После вызова метода в компоненте [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm) будут отрисованы все изменения, связанные с изменениями свойств компонента [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm), которые были выполнены после вызова метода [IBreadcrumb.BeginUpdate](IBreadcrumb.BeginUpdate.htm).


Примечание. При работе метода выполняется [загрузка](IBreadcrumb.LoadState.htm) состояния элементов компонента, сохраненного при выполнении метода [BeginUpdate](IBreadcrumb.BeginUpdate.htm).


## Пример


Пример использования приведен в описании метода [BeginUpdate](IBreadcrumb.BeginUpdate.htm).


См. также:


[IBreadcrumb](IBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
