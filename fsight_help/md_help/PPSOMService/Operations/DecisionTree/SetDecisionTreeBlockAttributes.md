# SetDecisionTreeBlockAttributes: Операция

SetDecisionTreeBlockAttributes: Операция
-


**


# SetDecisionTreeBlockAttributes


## Синтаксис


SetDecisionTreeBlockAttributesResult SetDecisionTreeBlockAttributes(OdId
 tBlock, SetDecisionTreeBlockAttributesArg tArg)


## Параметры


tBlock. Моникёр
 блока дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDecisionTreeBlockAttributes
 изменяет атрибуты блока дерева решений.


## Комментарии


Для выполнения операции укажите в поле tBlock
 моникёр экземпляра дерева решений с постфиксом «!Blocks!<идентификатор
 блока>» для работы с блоком, а в поле tArg
 устанавливаемые значения атрибутов. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешного изменения значений
 атрибутов.


## Пример


Ниже приведён пример изменения атрибутов блока в дереве решений. В запросе
 передаётся моникёр блока и устанавливаемые значения атрибутов. В ответе
 возвращается признак успешного изменения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDecisionTreeBlockAttributes xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBlock xmlns="****">
  <id>FDDEPGHMFLMLFOAEPIHADAAMMDDHFJLEJIDFFPMLJMAEDELM!M!S!CMPCCKHHMFLMLFOAEDEIBAJHJBDKBGLJEILHKIFGHADNADEAO!Blocks!DT224525B786524CD6A3E93A6C19ABD4CD</id>  </tBlock>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <x>150</x>  <y>150</y>  <width>130</width>  <height>30</height>  </tArg>
  </SetDecisionTreeBlockAttributes>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDecisionTreeBlockAttributesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDecisionTreeBlockAttributesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDecisionTreeBlockAttributes" :
  {
   "tBlock" :
    {
     "id" : "FDDEPGHMFLMLFOAEPIHADAAMMDDHFJLEJIDFFPMLJMAEDELM!M!S!CMPCCKHHMFLMLFOAEDEIBAJHJBDKBGLJEILHKIFGHADNADEAO!Blocks!DT224525B786524CD6A3E93A6C19ABD4CD"
    },
   "tArg" :
    {
     "x" : "150",
     "y" : "150",
     "width" : "130",
     "height" : "30"
    }
  }
}

### JSON-ответ:


{
 "SetDecisionTreeBlockAttributesResult" :
  {
   "result" : "1"
  }
}


public static SetDecisionTreeBlockAttributesResult SetDecisionTreeBlockAttributes(string treeMoniker, string blockId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDecisionTreeBlockAttributes()
    {
        tBlock = new OdId()
        {
            id = treeMoniker + "!Blocks!" + blockId
        },
        tArg = new SetDecisionTreeBlockAttributesArg()
        {
            x = 150,
            y = 150,
            height = 30,
            width = 130
        }
    };
    // Изменение атрибутов блока
    var result = somClient.SetDecisionTreeBlockAttributes(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
