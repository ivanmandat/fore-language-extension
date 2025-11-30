# GetDecisionTreeParameters: Операция

GetDecisionTreeParameters: Операция
-


**


# GetDecisionTreeParameters


## Синтаксис


GetDecisionTreeParametersResult GetDecisionTreeParameters(OdId
 tParent, GetDecisionTreeParametersArg tArg)


## Параметры


tParent. Моникёр
 открытого экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDecisionTreeParameters
 получает список параметров дерева решений.


## Комментарии


Для выполнения операции укажите в поле tParent
 моникёр экземпляра дерева решений, а в поле tArg
 настройки, в соответствии с которыми будут получены параметры. Моникёр
 может быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет список параметров и значения их
 атрибутов. Для каждого параметра извлекаются те атрибуты, которые доступны
 для параметра в соответствии с его типом. Дальнейшая работа с отдельным
 параметром может осуществляться с помощью операций [GetDecisionTreeParameter](GetDecisionTreeParameter.htm),
 [SetDecisionTreeParameterAttributes](SetDecisionTreeParameterAttributes.htm).


## Пример


Ниже приведён пример получения списка параметров дерева решений. В запросе
 передаётся моникёр экземпляра дерева решений и список атрибутов, извлекаемых
 для параметров. В ответе возвращается полученный список параметров и значения
 их атрибутов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDecisionTreeParameters xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParent xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC</id>  </tParent>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<attributesList>
  <its>id</its>  <its>name</its>  <its>type</its>  <its>subType</its>  </attributesList>
  <attributesPreset>None</attributesPreset>  <enumirateSubTypes>false</enumirateSubTypes>  </tArg>
  </GetDecisionTreeParameters>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDecisionTreeParametersResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>[![](../../minus.gif)](../../#)<parametersList xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<attributes>
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT27D0B57E39324CC8A2C678D6514BECA1</id>  <name>Расстояние</name>  <type>InputField</type>  <subType>2</subType>  </attributes>
  </its>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<attributes>
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DTBEDF0FF92C3D44279EE21884BBA33646</id>  <name>Состояние</name>  <type>InputField</type>  <subType>3</subType>  </attributes>
  </its>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<attributes>
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C</id>  <name>Список</name>  <value />
  <type>List</type>  <subType>2</subType>  </attributes>
  </its>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<attributes>
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DTC3713B66B09C4D468EF208B5854D8742</id>  <name>Справочник</name>  <type>Dimension</type>  <subType>2</subType>  </attributes>
  </its>
  </parametersList>
  </GetDecisionTreeParametersResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDecisionTreeParameters" :
  {
   "tParent" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC"
    },
   "tArg" :
    {
     "attributesList" :
      {
       "its" :
        [
          "id",
          "name",
          "type",
          "subType"
        ]
      },
     "attributesPreset" : "None",
     "enumirateSubTypes" : "false"
    }
  }
}

### JSON-ответ:


{
 "GetDecisionTreeParametersResult" :
  {
   "result" : "1",
   "parametersList" :
    {
     "its" :
      [
        {
         "attributes" :
          {
           "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT27D0B57E39324CC8A2C678D6514BECA1",
           "name" : "Расстояние",
           "type" : "InputField",
           "subType" : "2"
          }
        },
        {
         "attributes" :
          {
           "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DTBEDF0FF92C3D44279EE21884BBA33646",
           "name" : "Состояние",
           "type" : "InputField",
           "subType" : "3"
          }
        },
        {
         "attributes" :
          {
           "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C",
           "name" : "Список",
           "value" : "",
           "type" : "List",
           "subType" : "2"
          }
        },
        {
         "attributes" :
          {
           "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DTC3713B66B09C4D468EF208B5854D8742",
           "name" : "Справочник",
           "type" : "Dimension",
           "subType" : "2"
          }
        }
      ]
    }
  }
}


public static GetDecisionTreeParametersResult GetDTParameters(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDecisionTreeParameters()
    {
        tArg = new GetDecisionTreeParametersArg()
        {
            attributesList = new string[] { "id", "name", "type", "subType" },
            attributesPreset = DecisionTreeParameterAttributesPreset.None,
            enumirateSubTypes = false
        },
        tParent = new OdId() { id = moniker }
    };
    // Получение параметров дерева решений
    var result = somClient.GetDecisionTreeParameters(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
