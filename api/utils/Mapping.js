// remember each time you change the mapping you should create scenario and initialize the sim session
"use strict";
var Mapping = {
    "A699": "reportDate",
    "A862": "playerName",
    "A1": "seminar",
    "A2": "playerID",
    "A6": "scenarioID",
    "B3": "period",
    "A4": "periodYear",
    "A5": "periodQuarter",
    "A7": "dec_market1_corporateComBudget",
    "A8": "dec_market2_corporateComBudget",
    "A9": "dec_market3_corporateComBudget",
    "A11": "dec_market1_product1_advertisingBudget",
    "A12": "dec_market2_product1_advertisingBudget",
    "A13": "dec_market3_product1_advertisingBudget",
    "A14": "dec_market1_product2_advertisingBudget",
    "A15": "dec_market2_product2_advertisingBudget",
    "A16": "dec_market3_product2_advertisingBudget",
    "A17": "dec_market1_product3_advertisingBudget",
    "A18": "dec_market2_product3_advertisingBudget",
    "A19": "dec_market3_product3_advertisingBudget",
    "A21": "dec_market1_product1_price",
    "A22": "dec_market2_product1_price",
    "A23": "dec_market3_product1_price",
    "A24": "dec_market1_product2_price",
    "A25": "dec_market2_product2_price",
    "A26": "dec_market3_product2_price",
    "A27": "dec_market1_product3_price",
    "A28": "dec_market2_product3_price",
    "A29": "dec_market3_product3_price",
    "A31": "dec_market1_product1_deliveredQ",
    "A32": "dec_market2_product1_deliveredQ",
    "A33": "dec_market3_product1_deliveredQ",
    "A34": "dec_market1_product2_deliveredQ",
    "A35": "dec_market2_product2_deliveredQ",
    "A36": "dec_market3_product2_deliveredQ",
    "A37": "dec_market1_product3_deliveredQ",
    "A38": "dec_market2_product3_deliveredQ",
    "A39": "dec_market3_product3_deliveredQ",
    "A41": "dec_product1_improvementsTakeup",
    "A42": "dec_product2_improvementsTakeup",
    "A43": "dec_product3_improvementsTakeup",
    "A44": "dec_product1_developmentBudget",
    "A45": "dec_product2_developmentBudget",
    "A46": "dec_product3_developmentBudget",
    "A47": "dec_product1_assemblyTime",
    "A48": "dec_product2_assemblyTime",
    "A49": "dec_product3_assemblyTime",
    "A51": "dec_product1_premiumMaterialPropertion",
    "A52": "dec_product2_premiumMaterialPropertion",
    "A53": "dec_product3_premiumMaterialPropertion",
    "A54": "dec_subProduct1_subcontractQ",
    "A55": "dec_subProduct3_subcontractQ",
    "A56": "dec_subProduct5_subcontractQ",
    "A61": "dec_agent1_appointedNb",
    "A62": "dec_agent1_support",
    "A63": "dec_agent1_commissionRate",
    "A64": "dec_agent2_appointedNb",
    "A65": "dec_agent2_support",
    "A66": "dec_agent2_commissionRate",
    "A68": "dec_agent3_support",
    "A69": "dec_agent3_commissionRate",
    "A57": "dec_material1_purchase1_quantity",
    "A58": "dec_material1_purchase2_quantity",
    "A59": "dec_material1_purchase3_quantity",
    "A75": "dec_machinery1_maintenanceHours",
    "A73": "dec_machinery1_type1_boughtNb",
    "A74": "dec_machinery1_type1_soldNb",
    "A76": "dec_shiftLevel",
    "A77": "dec_eCommerce1_websitePortsNb",
    "A78": "dec_eCommerce1_websiteDevBudget",
    "A81": "dec_worker1_hire",
    "A82": "dec_worker1_trainedNb",
    "A83": "dec_worker1_hourlyWageRate",
    "A85": "dec_managementBudget",
    "A86": "dec_staffTrainingDays",
    "A91": "dec_sharesVariation",
    "A92": "dec_dividend",
    "A93": "dec_bankAccount1_termLoans",
    "A94": "dec_bankAccount1_termDeposit",
    "A72": "dec_factory1_extension",
    "A99": "dec_insurance1_plan",
    "A97": "dec_orderMarketSharesInfo",
    "A98": "dec_orderCorporateActivityInfo",
    // products
    "A281": "res_land1_availableSpace",
    "A284": "res_factory1_availableSpace",
    "A285": "res_factory1_machiningSpaceUsed",
    "A286": "res_factory1_workersSpaceUsed",
    "A287": "res_factory1_stocksSpaceUsed",
    "A291": "res_machinery1_effectiveSoldNb",
    "A292": "res_machinery1_machinesNb",
    "A293": "res_machinery1_effectiveBoughtNb",
    "A294": "res_machinery1_availablesNextPeriodNb",
    "A301": "res_machinery1_theoreticalAvailableHoursNb",
    "A302": "res_machinery1_breakdownHoursNb",
    "A303": "res_machinery1_workedHoursNb",
    "A304": "res_machinery1_machinesEfficiencyAvg",
    "A311": "res_material1_openingQ",
    "B312": "res_material1_premiumMaterialPurchasesQ",
    "A312": "res_material1_unplannedPurchasesQ",
    "A313": "res_material1_spoiledQ",
    "A314": "res_material1_lostQ",
    "A315": "res_material1_outQ",
    "A316": "res_material1_closingQ",
    "A317": "res_material1_deliveryNextPBoughtBeforeLastPQ",
    "A327": "res_eCommerce1_initialActiveWebsitePortsNb",
    "A318": "res_eCommerce1_activeWebsitePortsNb",
    "A319": "res_eCommerce1_websiteVisitsNb",
    "A320": "res_eCommerce1_successfulWebsiteVisitsPerThousand",
    "A329": "res_eCommerce1_serviceComplaintsNb",
    "A328": "res_eCommerce1_wantedWebsitePortsNb",
    "A191": "res_worker1_availablesAtStartNb",
    "A192": "res_worker2_availablesAtStartNb",
    "A193": "res_worker1_recruitedEffectiveNb",
    "A194": "res_worker2_recruitedEffectiveNb",
    "A195": "res_worker1_dismissedEffectiveNb",
    "A196": "res_worker2_dismissedEffectiveNb",
    "A197": "res_worker1_availablesNextPeriodNb",
    "A198": "res_worker2_availablesNextPeriodNb",
    "A305": "res_worker1_availableTotalHoursNb",
    "A306": "res_worker1_absenteeismHoursNb",
    "A307": "res_worker1_workedTotaHoursNb",
    "A308": "res_worker1_strikeNextPeriodWeeksNb",
    "A321": "res_agent1_effectiveAppointedNb",
    "A322": "res_agent2_effectiveAppointedNb",
    "A323": "res_agent1_resignedNb",
    "A324": "res_agent2_resignedNb",
    "A325": "res_agent1_availablesNextPeriodNb",
    "A326": "res_agent2_availablesNextPeriodNb",
    "A295": "res_market1_transport_journeyLength",
    "A296": "res_market1_transport_loadsNb",
    "A297": "res_market2_transport_journeyLength",
    "A298": "res_market2_transport_loadsNb",
    "A299": "res_market3_transport_journeyLength",
    "A300": "res_market3_transport_loadsNb",
    "A108": "res_product1_scheduledQ",
    "A109": "res_product2_scheduledQ",
    "A110": "res_product3_scheduledQ",
    "A111": "res_product1_producedQ",
    "A112": "res_product2_producedQ",
    "A113": "res_product3_producedQ",
    "A114": "res_product1_rejectedQ",
    "A115": "res_product2_rejectedQ",
    "A116": "res_product3_rejectedQ",
    "A117": "res_product1_lostQ",
    "A118": "res_product2_lostQ",
    "A119": "res_product3_lostQ",
    // customer’s quality estimate
    "A102": "res_product1_RnDQuality",
    "A103": "res_product2_RnDQuality",
    "A104": "res_product3_RnDQuality",
    "A105": "res_product1_qualityScore",
    "A106": "res_product2_qualityScore",
    "A107": "res_product3_qualityScore",
    "A121": "res_market1_product1_effectiveDeliveredQ",
    "A122": "res_market2_product1_effectiveDeliveredQ",
    "A123": "res_market3_product1_effectiveDeliveredQ",
    "A124": "res_market1_product2_effectiveDeliveredQ",
    "A125": "res_market2_product2_effectiveDeliveredQ",
    "A126": "res_market3_product2_effectiveDeliveredQ",
    "A127": "res_market1_product3_effectiveDeliveredQ",
    "A128": "res_market2_product3_effectiveDeliveredQ",
    "A129": "res_market3_product3_effectiveDeliveredQ",
    "A131": "res_market1_product1_orderedQ",
    "A132": "res_market2_product1_orderedQ",
    "A133": "res_market3_product1_orderedQ",
    "A134": "res_market1_product2_orderedQ",
    "A135": "res_market2_product2_orderedQ",
    "A136": "res_market3_product2_orderedQ",
    "A137": "res_market1_product3_orderedQ",
    "A138": "res_market2_product3_orderedQ",
    "A139": "res_market3_product3_orderedQ",
    "A141": "res_market1_product1_soldQ",
    "A142": "res_market2_product1_soldQ",
    "A143": "res_market3_product1_soldQ",
    "A144": "res_market1_product2_soldQ",
    "A145": "res_market2_product2_soldQ",
    "A146": "res_market3_product2_soldQ",
    "A147": "res_market1_product3_soldQ",
    "A148": "res_market2_product3_soldQ",
    "A149": "res_market3_product3_soldQ",
    "A151": "res_market1_product1_backlogQ",
    "A152": "res_market2_product1_backlogQ",
    "A154": "res_market1_product2_backlogQ",
    "A155": "res_market2_product2_backlogQ",
    "A157": "res_market1_product3_backlogQ",
    "A158": "res_market2_product3_backlogQ",
    "A161": "res_market1_product1_stockQ",
    "A162": "res_market2_product1_stockQ",
    "A163": "res_market3_product1_stockQ",
    "A164": "res_market1_product2_stockQ",
    "A165": "res_market2_product2_stockQ",
    "A166": "res_market3_product2_stockQ",
    "A167": "res_market1_product3_stockQ",
    "A168": "res_market2_product3_stockQ",
    "A169": "res_market3_product3_stockQ",
    "A171": "res_product1_servicedQ",
    "A172": "res_product2_servicedQ",
    "A173": "res_product3_servicedQ",
    "A177": "res_product1_improvementsResult",
    "A178": "res_product2_improvementsResult",
    "A179": "res_product3_improvementsResult",
    "A181": "res_subProduct1_outsourcedOutQ",
    "A182": "res_subProduct3_outsourcedOutQ",
    "A183": "res_subProduct5_outsourcedOutQ",
    "A184": "res_subProduct1_outsourcedClosingQ",
    "A185": "res_subProduct3_outsourcedClosingQ",
    "A186": "res_subProduct5_outsourcedClosingQ",
    "A187": "res_subProduct1_outsourcedAvailableNextPQ",
    "A188": "res_subProduct3_outsourcedAvailableNextPQ",
    "A189": "res_subProduct5_outsourcedAvailableNextPQ",
    "A201": "res_advertisingCost",
    "A202": "res_internetDistributionCost",
    "A203": "res_ISPCost",
    "A204": "res_salesForceCost",
    "A205": "res_salesOfficeCost",
    "A206": "res_guaranteeServicingCost",
    "A207": "res_productsDevelopmentCost",
    "A208": "res_websiteDevelopmentCost",
    "A209": "res_personnelCost",
    "A210": "res_machinesMaintenanceCost",
    "A211": "res_warehousingCost",
    "A212": "res_BI_BusinessIntelligenceCost",
    "A213": "res_creditControlCost",
    "A214": "res_insurancesPremiumsCost",
    "A215": "res_managementCost",
    "A216": "res_miscellaneousCost",
    "A217": "res_administrativeExpensesTotalCost",
    "A240": "res_previousTaxableProfitLoss",
    "A257": "res_taxableProfitLoss",
    "A219": "res_insurancesClaimsForLosses",
    "A220": "res_insurancesPrimaryNonInsuredRisk",
    "A241": "res_salesRevenue",
    "A242": "res_inventoriesOpeningValue",
    "A243": "res_componentsPurchasedCost",
    "A244": "res_materialsPurchasedCost",
    "A245": "res_machinesRunningCost",
    "A246": "res_unskilledWorkersWagesCost",
    "A247": "res_skilledWorkersWagesCost",
    "A248": "res_qualityControlCostCost",
    "A249": "res_hiredTransportCost",
    "A250": "res_inventoriesClosingValue",
    "A251": "res_productionCost",
    "A252": "res_grossProfit",
    "A254": "res_depreciation",
    "A255": "res_taxAssessed",
    "A256": "res_currPeriodProfitLoss",
    "A260": "res_previousRetainedEarnings",
    "A261": "res_landNetValue",
    "A262": "res_buildingsNetValue",
    "A263": "res_machineryNetValue",
    "A265": "res_productsInventoriesValue",
    "A266": "res_componentsInventoriesValue",
    "A267": "res_materialsInventoriesValue",
    "A268": "res_tradeReceivablesValue",
    "A271": "res_taxDue",
    "A272": "res_tradePayablesValue",
    "A277": "res_equityTotalValue",
    "A221": "res_tradingReceipts",
    "A222": "res_insurancesReceipts",
    "A223": "res_tradingPayments",
    "A224": "res_taxPaid",
    "A226": "res_assetsSales",
    "A227": "res_assetsPurchases",
    "A269": "res_cashValue",
    "A233": "res_netCashFlow",
    "A239": "res_nextPBorrowingPower",
    "A273": "res_banksOverdraft",
    "A238": "res_nextPOverdraftLimit",
    "A232": "res_interestPaid",
    "A225": "res_interestReceived",
    "A270": "res_termDeposit",
    "A274": "res_termLoansValue",
    "A234": "res_previousBalance",
    "A231": "res_additionalLoans",
    "A275": "res_capital_shareCapital",
    "A276": "res_capital_sharePremiumAccount",
    "A229": "res_capital_sharesRepurchased",
    "A228": "res_capital_sharesIssued",
    "A230": "res_capital_dividendPaid",
    // group info
    "A505": "res_economy1_GDP",
    "A506": "res_economy2_GDP",
    "A504": "res_economy3_GDP",
    "A507": "res_economy1_unemploymentRatePerThousand",
    "A508": "res_economy2_unemploymentRatePerThousand",
    "A509": "res_economy1_externalTradeBalance",
    "A510": "res_economy2_externalTradeBalance",
    "A501": "res_economy1_interestBaseRatePerThousand",
    "A502": "res_economy2_interestBaseRatePerThousand",
    "A511": "res_economy2_exchangeRatePerCent",
    "A512": "res_economy1_inflationRate",
    "A513": "res_economy2_inflationRate",
    "A514": "res_economy3_inflationRate",
    "A870": "res_economy1_producerPriceBase100Index",
    "A871": "res_economy2_producerPriceBase100Index",
    "A872": "res_economy3_producerPriceBase100Index",
    "A518": "res_buildingContractor1_buildingCost",
    "A515": "res_materialMarket1_spotPrice",
    "A516": "res_materialMarket1_threeMthPrice",
    "A517": "res_materialMarket1_sixMthPrice",
    "A681": "res_economy1_businessReport",
    "A521": "res_BI_corporate1_playerID",
    "A522": "res_BI_corporate1_sharePriceByTenThousand",
    "A523": "res_BI_corporate1_marketValuation",
    "A524": "res_BI_corporate1_dividendPaid",
    "A525": "res_BI_corporate1_IP",
    "A526": "res_BI_corporate1_market1_product1_price",
    "A527": "res_BI_corporate1_market2_product1_price",
    "A528": "res_BI_corporate1_market3_product1_price",
    "A529": "res_BI_corporate1_market1_product2_price",
    "A530": "res_BI_corporate1_market2_product2_price",
    "A531": "res_BI_corporate1_market3_product2_price",
    "A532": "res_BI_corporate1_market1_product3_price",
    "A533": "res_BI_corporate1_market2_product3_price",
    "A534": "res_BI_corporate1_market3_product3_price",
    "A535": "res_BI_corporate1_workersNb",
    "A536": "res_BI_corporate1_hourlyWageRatePerCent",
    "A537": "res_BI_corporate1_salesForceNb",
    "A541": "res_BI_corporate2_playerID",
    "A542": "res_BI_corporate2_sharePriceByTenThousand",
    "A543": "res_BI_corporate2_marketValuation",
    "A544": "res_BI_corporate2_dividendRate",
    "A545": "res_BI_corporate2_IP",
    "A546": "res_BI_corporate2_market1_product1_price",
    "A547": "res_BI_corporate2_market2_product1_price",
    "A548": "res_BI_corporate2_market3_product1_price",
    "A549": "res_BI_corporate2_market1_product2_price",
    "A550": "res_BI_corporate2_market2_product2_price",
    "A551": "res_BI_corporate2_market3_product2_price",
    "A552": "res_BI_corporate2_market1_product3_price",
    "A553": "res_BI_corporate2_market2_product3_price",
    "A554": "res_BI_corporate2_market3_product3_price",
    "A555": "res_BI_corporate2_workersNb",
    "A556": "res_BI_corporate2_hourlyWageRatePerCent",
    "A557": "res_BI_corporate2_salesForceNb",
    "A561": "res_BI_corporate3_playerID",
    "A562": "res_BI_corporate3_sharePriceByTenThousand",
    "A563": "res_BI_corporate3_marketValuation",
    "A564": "res_BI_corporate3_dividendRate",
    "A565": "res_BI_corporate3_IP",
    "A566": "res_BI_corporate3_market1_product1_price",
    "A567": "res_BI_corporate3_market2_product1_price",
    "A568": "res_BI_corporate3_market3_product1_price",
    "A569": "res_BI_corporate3_market1_product2_price",
    "A570": "res_BI_corporate3_market2_product2_price",
    "A571": "res_BI_corporate3_market3_product2_price",
    "A572": "res_BI_corporate3_market1_product3_price",
    "A573": "res_BI_corporate3_market2_product3_price",
    "A574": "res_BI_corporate3_market3_product3_price",
    "A575": "res_BI_corporate3_workersNb",
    "A576": "res_BI_corporate3_hourlyWageRatePerCent",
    "A577": "res_BI_corporate3_salesForceNb",
    "A581": "res_BI_corporate4_playerID",
    "A582": "res_BI_corporate4_sharePriceByTenThousand",
    "A583": "res_BI_corporate4_marketValuation",
    "A584": "res_BI_corporate4_dividendRate",
    "A585": "res_BI_corporate4_IP",
    "A586": "res_BI_corporate4_market1_product1_price",
    "A587": "res_BI_corporate4_market2_product1_price",
    "A588": "res_BI_corporate4_market3_product1_price",
    "A589": "res_BI_corporate4_market1_product2_price",
    "A590": "res_BI_corporate4_market2_product2_price",
    "A591": "res_BI_corporate4_market3_product2_price",
    "A592": "res_BI_corporate4_market1_product3_price",
    "A593": "res_BI_corporate4_market2_product3_price",
    "A594": "res_BI_corporate4_market3_product3_price",
    "A595": "res_BI_corporate4_workersNb",
    "A596": "res_BI_corporate4_hourlyWageRatePerCent",
    "A597": "res_BI_corporate4_salesForceNb",
    "A601": "res_BI_corporate5_playerID",
    "A602": "res_BI_corporate5_sharePriceByTenThousand",
    "A603": "res_BI_corporate5_marketValuation",
    "A604": "res_BI_corporate5_dividendRate",
    "A605": "res_BI_corporate5_IP",
    "A606": "res_BI_corporate5_market1_product1_price",
    "A607": "res_BI_corporate5_market2_product1_price",
    "A608": "res_BI_corporate5_market3_product1_price",
    "A609": "res_BI_corporate5_market1_product2_price",
    "A610": "res_BI_corporate5_market2_product2_price",
    "A611": "res_BI_corporate5_market3_product2_price",
    "A612": "res_BI_corporate5_market1_product3_price",
    "A613": "res_BI_corporate5_market2_product3_price",
    "A614": "res_BI_corporate5_market3_product3_price",
    "A615": "res_BI_corporate5_workersNb",
    "A616": "res_BI_corporate5_hourlyWageRatePerCent",
    "A617": "res_BI_corporate5_salesForceNb",
    "A621": "res_BI_corporate6_playerID",
    "A622": "res_BI_corporate6_sharePriceByTenThousand",
    "A623": "res_BI_corporate6_marketValuation",
    "A624": "res_BI_corporate6_dividendRate",
    "A625": "res_BI_corporate6_IP",
    "A626": "res_BI_corporate6_market1_product1_price",
    "A627": "res_BI_corporate6_market2_product1_price",
    "A628": "res_BI_corporate6_market3_product1_price",
    "A629": "res_BI_corporate6_market1_product2_price",
    "A630": "res_BI_corporate6_market2_product2_price",
    "A631": "res_BI_corporate6_market3_product2_price",
    "A632": "res_BI_corporate6_market1_product3_price",
    "A633": "res_BI_corporate6_market2_product3_price",
    "A634": "res_BI_corporate6_market3_product3_price",
    "A635": "res_BI_corporate6_workersNb",
    "A636": "res_BI_corporate6_hourlyWageRatePerCent",
    "A637": "res_BI_corporate6_salesForceNb",
    "A641": "res_BI_corporate7_playerID",
    "A642": "res_BI_corporate7_sharePriceByTenThousand",
    "A643": "res_BI_corporate7_marketValuation",
    "A644": "res_BI_corporate7_dividendRate",
    "A645": "res_BI_corporate7_IP",
    "A646": "res_BI_corporate7_market1_product1_price",
    "A647": "res_BI_corporate7_market2_product1_price",
    "A648": "res_BI_corporate7_market3_product1_price",
    "A649": "res_BI_corporate7_market1_product2_price",
    "A650": "res_BI_corporate7_market2_product2_price",
    "A651": "res_BI_corporate7_market3_product2_price",
    "A652": "res_BI_corporate7_market1_product3_price",
    "A653": "res_BI_corporate7_market2_product3_price",
    "A654": "res_BI_corporate7_market3_product3_price",
    "A655": "res_BI_corporate7_workersNb",
    "A656": "res_BI_corporate7_hourlyWageRatePerCent",
    "A657": "res_BI_corporate7_salesForceNb",
    "A661": "res_BI_corporate8_playerID",
    "A662": "res_BI_corporate8_sharePriceByTenThousand",
    "A663": "res_BI_corporate8_marketValuation",
    "A664": "res_BI_corporate8_dividendRate",
    "A665": "res_BI_corporate8_IP",
    "A666": "res_BI_corporate8_market1_product1_price",
    "A667": "res_BI_corporate8_market2_product1_price",
    "A668": "res_BI_corporate8_market3_product1_price",
    "A669": "res_BI_corporate8_market1_product2_price",
    "A670": "res_BI_corporate8_market2_product2_price",
    "A671": "res_BI_corporate8_market3_product2_price",
    "A672": "res_BI_corporate8_market1_product3_price",
    "A673": "res_BI_corporate8_market2_product3_price",
    "A674": "res_BI_corporate8_market3_product3_price",
    "A675": "res_BI_corporate8_workersNb",
    "A676": "res_BI_corporate8_hourlyWageRatePerCent",
    "A677": "res_BI_corporate8_salesForceNb",
    "A701": "res_BI_corporate1_playerID",
    "A702": "res_BI_corporate1_nonCurrentAssetsTotalValue",
    "A703": "res_BI_corporate1_inventoriesClosingValue",
    "A704": "res_BI_corporate1_tradeReceivablesValue",
    "A705": "res_BI_corporate1_cashValue",
    "A708": "res_BI_corporate1_taxAssessedAndDue",
    "A709": "res_BI_corporate1_tradePayablesValue",
    "A710": "res_BI_corporate1_banksOverdraft",
    "A712": "res_BI_corporate1_LTLoans",
    "A714": "res_BI_corporate1_shareCapital",
    "A715": "res_BI_corporate1_sharePremiumAccount",
    "A716": "res_BI_corporate1_retainedEarnings",
    "A721": "res_BI_corporate2_playerID",
    "A722": "res_BI_corporate2_nonCurrentAssetsTotalValue",
    "A723": "res_BI_corporate2_inventoriesClosingValue",
    "A724": "res_BI_corporate2_tradeReceivablesValue",
    "A725": "res_BI_corporate2_cashValue",
    "A728": "res_BI_corporate2_taxAssessedAndDue",
    "A729": "res_BI_corporate2_tradePayablesValue",
    "A730": "res_BI_corporate2_banksOverdraft",
    "A732": "res_BI_corporate2_LTLoans",
    "A734": "res_BI_corporate2_shareCapital",
    "A735": "res_BI_corporate2_sharePremiumAccount",
    "A736": "res_BI_corporate2_retainedEarnings",
    "A741": "res_BI_corporate3_playerID",
    "A742": "res_BI_corporate3_nonCurrentAssetsTotalValue",
    "A743": "res_BI_corporate3_inventoriesClosingValue",
    "A744": "res_BI_corporate3_tradeReceivablesValue",
    "A745": "res_BI_corporate3_cashValue",
    "A748": "res_BI_corporate3_taxAssessedAndDue",
    "A749": "res_BI_corporate3_tradePayablesValue",
    "A750": "res_BI_corporate3_banksOverdraft",
    "A752": "res_BI_corporate3_LTLoans",
    "A754": "res_BI_corporate3_shareCapital",
    "A755": "res_BI_corporate3_sharePremiumAccount",
    "A756": "res_BI_corporate3_retainedEarnings",
    "A761": "res_BI_corporate4_playerID",
    "A762": "res_BI_corporate4_nonCurrentAssetsTotalValue",
    "A763": "res_BI_corporate4_inventoriesClosingValue",
    "A764": "res_BI_corporate4_tradeReceivablesValue",
    "A765": "res_BI_corporate4_cashValue",
    "A768": "res_BI_corporate4_taxAssessedAndDue",
    "A769": "res_BI_corporate4_tradePayablesValue",
    "A770": "res_BI_corporate4_banksOverdraft",
    "A772": "res_BI_corporate4_LTLoans",
    "A774": "res_BI_corporate4_shareCapital",
    "A775": "res_BI_corporate4_sharePremiumAccount",
    "A776": "res_BI_corporate4_retainedEarnings",
    "A781": "res_BI_corporate5_playerID",
    "A782": "res_BI_corporate5_nonCurrentAssetsTotalValue",
    "A783": "res_BI_corporate5_inventoriesClosingValue",
    "A784": "res_BI_corporate5_tradeReceivablesValue",
    "A785": "res_BI_corporate5_cashValue",
    "A788": "res_BI_corporate5_taxAssessedAndDue",
    "A789": "res_BI_corporate5_tradePayablesValue",
    "A790": "res_BI_corporate5_banksOverdraft",
    "A792": "res_BI_corporate5_LTLoans",
    "A794": "res_BI_corporate5_shareCapital",
    "A795": "res_BI_corporate5_sharePremiumAccount",
    "A796": "res_BI_corporate5_retainedEarnings",
    "A801": "res_BI_corporate6_playerID",
    "A802": "res_BI_corporate6_nonCurrentAssetsTotalValue",
    "A803": "res_BI_corporate6_inventoriesClosingValue",
    "A804": "res_BI_corporate6_tradeReceivablesValue",
    "A805": "res_BI_corporate6_cashValue",
    "A808": "res_BI_corporate6_taxAssessedAndDue",
    "A809": "res_BI_corporate6_tradePayablesValue",
    "A810": "res_BI_corporate6_banksOverdraft",
    "A812": "res_BI_corporate6_LTLoans",
    "A814": "res_BI_corporate6_shareCapital",
    "A815": "res_BI_corporate6_sharePremiumAccount",
    "A816": "res_BI_corporate6_retainedEarnings",
    "A821": "res_BI_corporate7_playerID",
    "A822": "res_BI_corporate7_nonCurrentAssetsTotalValue",
    "A823": "res_BI_corporate7_inventoriesClosingValue",
    "A824": "res_BI_corporate7_tradeReceivablesValue",
    "A825": "res_BI_corporate7_cashValue",
    "A828": "res_BI_corporate7_taxAssessedAndDue",
    "A829": "res_BI_corporate7_tradePayablesValue",
    "A830": "res_BI_corporate7_banksOverdraft",
    "A832": "res_BI_corporate7_LTLoans",
    "A834": "res_BI_corporate7_shareCapital",
    "A835": "res_BI_corporate7_sharePremiumAccount",
    "A836": "res_BI_corporate7_retainedEarnings",
    "A841": "res_BI_corporate8_playerID",
    "A842": "res_BI_corporate8_nonCurrentAssetsTotalValue",
    "A843": "res_BI_corporate8_inventoriesClosingValue",
    "A844": "res_BI_corporate8_tradeReceivablesValue",
    "A845": "res_BI_corporate8_cashValue",
    "A848": "res_BI_corporate8_taxAssessedAndDue",
    "A849": "res_BI_corporate8_tradePayablesValue",
    "A850": "res_BI_corporate8_banksOverdraft",
    "A852": "res_BI_corporate8_LTLoans",
    "A854": "res_BI_corporate8_shareCapital",
    "A855": "res_BI_corporate8_sharePremiumAccount",
    "A856": "res_BI_corporate8_retainedEarnings",
    "A420": "res_BI_corporateActivityInfoOrderStatus",
    "A330": "res_BI_marketSharesInfoOrderStatus",
    "A421": "res_BI_corporate1_playerID",
    "A422": "res_BI_corporate1_advertisingCost",
    "A423": "res_BI_corporate1_productsDevelopmentCost",
    "A424": "res_BI_corporate1_product1_consumerStarRatings",
    "A425": "res_BI_corporate1_product2_consumerStarRatings",
    "A426": "res_BI_corporate1_product3_consumerStarRatings",
    "A427": "res_BI_corporate1_eCommerce1_websiteConsumerStarRatings",
    "A428": "res_BI_corporate2_playerID",
    "A429": "res_BI_corporate2_advertisingCost",
    "A430": "res_BI_corporate2_productsDevelopmentCost",
    "A431": "res_BI_corporate2_product1_consumerStarRatings",
    "A432": "res_BI_corporate2_product2_consumerStarRatings",
    "A433": "res_BI_corporate2_product3_consumerStarRatings",
    "A434": "res_BI_corporate2_eCommerce1_websiteConsumerStarRatings",
    "A435": "res_BI_corporate3_playerID",
    "A436": "res_BI_corporate3_advertisingCost",
    "A437": "res_BI_corporate3_productsDevelopmentCost",
    "A438": "res_BI_corporate3_product1_consumerStarRatings",
    "A439": "res_BI_corporate3_product2_consumerStarRatings",
    "A440": "res_BI_corporate3_product3_consumerStarRatings",
    "A441": "res_BI_corporate3_eCommerce1_websiteConsumerStarRatings",
    "A442": "res_BI_corporate4_playerID",
    "A443": "res_BI_corporate4_advertisingCost",
    "A444": "res_BI_corporate4_productsDevelopmentCost",
    "A445": "res_BI_corporate4_product1_consumerStarRatings",
    "A446": "res_BI_corporate4_product2_consumerStarRatings",
    "A447": "res_BI_corporate4_product3_consumerStarRatings",
    "A448": "res_BI_corporate4_eCommerce1_websiteConsumerStarRatings",
    "A449": "res_BI_corporate5_playerID",
    "A450": "res_BI_corporate5_advertisingCost",
    "A451": "res_BI_corporate5_productsDevelopmentCost",
    "A452": "res_BI_corporate5_product1_consumerStarRatings",
    "A453": "res_BI_corporate5_product2_consumerStarRatings",
    "A454": "res_BI_corporate5_product3_consumerStarRatings",
    "A455": "res_BI_corporate5_eCommerce1_websiteConsumerStarRatings",
    "A456": "res_BI_corporate6_playerID",
    "A457": "res_BI_corporate6_advertisingCost",
    "A458": "res_BI_corporate6_productsDevelopmentCost",
    "A459": "res_BI_corporate6_product1_consumerStarRatings",
    "A460": "res_BI_corporate6_product2_consumerStarRatings",
    "A461": "res_BI_corporate6_product3_consumerStarRatings",
    "A462": "res_BI_corporate6_eCommerce1_websiteConsumerStarRatings",
    "A463": "res_BI_corporate7_playerID",
    "A464": "res_BI_corporate7_advertisingCost",
    "A465": "res_BI_corporate7_productsDevelopmentCost",
    "A466": "res_BI_corporate7_product1_consumerStarRatings",
    "A467": "res_BI_corporate7_product2_consumerStarRatings",
    "A468": "res_BI_corporate7_product3_consumerStarRatings",
    "A469": "res_BI_corporate7_eCommerce1_websiteConsumerStarRatings",
    "A470": "res_BI_corporate8_playerID",
    "A471": "res_BI_corporate8_advertisingCost",
    "A472": "res_BI_corporate8_productsDevelopmentCost",
    "A473": "res_BI_corporate8_product1_consumerStarRatings",
    "A474": "res_BI_corporate8_product2_consumerStarRatings",
    "A475": "res_BI_corporate8_product3_consumerStarRatings",
    "A476": "res_BI_corporate8_eCommerce1_websiteConsumerStarRatings",
    "A331": "res_BI_corporate1_playerID",
    "A332": "res_BI_corporate1_market1_product1_marketVolumeShareOfSales",
    "A333": "res_BI_corporate1_market2_product1_marketVolumeShareOfSales",
    "A334": "res_BI_corporate1_market3_product1_marketVolumeShareOfSales",
    "A335": "res_BI_corporate1_market1_product2_marketVolumeShareOfSales",
    "A336": "res_BI_corporate1_market2_product2_marketVolumeShareOfSales",
    "A337": "res_BI_corporate1_market3_product2_marketVolumeShareOfSales",
    "A338": "res_BI_corporate1_market1_product3_marketVolumeShareOfSales",
    "A339": "res_BI_corporate1_market2_product3_marketVolumeShareOfSales",
    "A340": "res_BI_corporate1_market3_product3_marketVolumeShareOfSales",
    "A341": "res_BI_corporate2_playerID",
    "A342": "res_BI_corporate2_market1_product1_marketVolumeShareOfSales",
    "A343": "res_BI_corporate2_market2_product1_marketVolumeShareOfSales",
    "A344": "res_BI_corporate2_market3_product1_marketVolumeShareOfSales",
    "A345": "res_BI_corporate2_market1_product2_marketVolumeShareOfSales",
    "A346": "res_BI_corporate2_market2_product2_marketVolumeShareOfSales",
    "A347": "res_BI_corporate2_market3_product2_marketVolumeShareOfSales",
    "A348": "res_BI_corporate2_market1_product3_marketVolumeShareOfSales",
    "A349": "res_BI_corporate2_market2_product3_marketVolumeShareOfSales",
    "A350": "res_BI_corporate2_market3_product3_marketVolumeShareOfSales",
    "A351": "res_BI_corporate3_playerID",
    "A352": "res_BI_corporate3_market1_product1_marketVolumeShareOfSales",
    "A353": "res_BI_corporate3_market2_product1_marketVolumeShareOfSales",
    "A354": "res_BI_corporate3_market3_product1_marketVolumeShareOfSales",
    "A355": "res_BI_corporate3_market1_product2_marketVolumeShareOfSales",
    "A356": "res_BI_corporate3_market2_product2_marketVolumeShareOfSales",
    "A357": "res_BI_corporate3_market3_product2_marketVolumeShareOfSales",
    "A358": "res_BI_corporate3_market1_product3_marketVolumeShareOfSales",
    "A359": "res_BI_corporate3_market2_product3_marketVolumeShareOfSales",
    "A360": "res_BI_corporate3_market3_product3_marketVolumeShareOfSales",
    "A361": "res_BI_corporate4_playerID",
    "A362": "res_BI_corporate4_market1_product1_marketVolumeShareOfSales",
    "A363": "res_BI_corporate4_market2_product1_marketVolumeShareOfSales",
    "A364": "res_BI_corporate4_market3_product1_marketVolumeShareOfSales",
    "A365": "res_BI_corporate4_market1_product2_marketVolumeShareOfSales",
    "A366": "res_BI_corporate4_market2_product2_marketVolumeShareOfSales",
    "A367": "res_BI_corporate4_market3_product2_marketVolumeShareOfSales",
    "A368": "res_BI_corporate4_market1_product3_marketVolumeShareOfSales",
    "A369": "res_BI_corporate4_market2_product3_marketVolumeShareOfSales",
    "A370": "res_BI_corporate4_market3_product3_marketVolumeShareOfSales",
    "A371": "res_BI_corporate5_playerID",
    "A372": "res_BI_corporate5_market1_product1_marketVolumeShareOfSales",
    "A373": "res_BI_corporate5_market2_product1_marketVolumeShareOfSales",
    "A374": "res_BI_corporate5_market3_product1_marketVolumeShareOfSales",
    "A375": "res_BI_corporate5_market1_product2_marketVolumeShareOfSales",
    "A376": "res_BI_corporate5_market2_product2_marketVolumeShareOfSales",
    "A377": "res_BI_corporate5_market3_product2_marketVolumeShareOfSales",
    "A378": "res_BI_corporate5_market1_product3_marketVolumeShareOfSales",
    "A379": "res_BI_corporate5_market2_product3_marketVolumeShareOfSales",
    "A380": "res_BI_corporate5_market3_product3_marketVolumeShareOfSales",
    "A381": "res_BI_corporate6_playerID",
    "A382": "res_BI_corporate6_market1_product1_marketVolumeShareOfSales",
    "A383": "res_BI_corporate6_market2_product1_marketVolumeShareOfSales",
    "A384": "res_BI_corporate6_market3_product1_marketVolumeShareOfSales",
    "A385": "res_BI_corporate6_market1_product2_marketVolumeShareOfSales",
    "A386": "res_BI_corporate6_market2_product2_marketVolumeShareOfSales",
    "A387": "res_BI_corporate6_market3_product2_marketVolumeShareOfSales",
    "A388": "res_BI_corporate6_market1_product3_marketVolumeShareOfSales",
    "A389": "res_BI_corporate6_market2_product3_marketVolumeShareOfSales",
    "A390": "res_BI_corporate6_market3_product3_marketVolumeShareOfSales",
    "A391": "res_BI_corporate7_playerID",
    "A392": "res_BI_corporate7_market1_product1_marketVolumeShareOfSales",
    "A393": "res_BI_corporate7_market2_product1_marketVolumeShareOfSales",
    "A394": "res_BI_corporate7_market3_product1_marketVolumeShareOfSales",
    "A395": "res_BI_corporate7_market1_product2_marketVolumeShareOfSales",
    "A396": "res_BI_corporate7_market2_product2_marketVolumeShareOfSales",
    "A397": "res_BI_corporate7_market3_product2_marketVolumeShareOfSales",
    "A398": "res_BI_corporate7_market1_product3_marketVolumeShareOfSales",
    "A399": "res_BI_corporate7_market2_product3_marketVolumeShareOfSales",
    "A400": "res_BI_corporate7_market3_product3_marketVolumeShareOfSales",
    "A401": "res_BI_corporate8_playerID",
    "A402": "res_BI_corporate8_market1_product1_marketVolumeShareOfSales",
    "A403": "res_BI_corporate8_market2_product1_marketVolumeShareOfSales",
    "A404": "res_BI_corporate8_market3_product1_marketVolumeShareOfSales",
    "A405": "res_BI_corporate8_market1_product2_marketVolumeShareOfSales",
    "A406": "res_BI_corporate8_market2_product2_marketVolumeShareOfSales",
    "A407": "res_BI_corporate8_market3_product2_marketVolumeShareOfSales",
    "A408": "res_BI_corporate8_market1_product3_marketVolumeShareOfSales",
    "A409": "res_BI_corporate8_market2_product3_marketVolumeShareOfSales",
    "A410": "res_BI_corporate8_market3_product3_marketVolumeShareOfSales",
    // Check up
    "B11": "dec_market1_product1_advertisingBudgetInvalid",
    "B12": "dec_market2_product1_advertisingBudgetInvalid",
    "B13": "dec_market3_product1_advertisingBudgetInvalid",
    "B14": "dec_market1_product2_advertisingBudgetInvalid",
    "B15": "dec_market2_product2_advertisingBudgetInvalid",
    "B16": "dec_market3_product2_advertisingBudgetInvalid",
    "B17": "dec_market1_product3_advertisingBudgetInvalid",
    "B18": "dec_market2_product3_advertisingBudgetInvalid",
    "B19": "dec_market3_product3_advertisingBudgetInvalid",
    "B21": "dec_market1_product1_priceInvalid",
    "B22": "dec_market2_product1_priceInvalid",
    "B23": "dec_market3_product1_priceInvalid",
    "B24": "dec_market1_product2_priceInvalid",
    "B25": "dec_market2_product2_priceInvalid",
    "B26": "dec_market3_product2_priceInvalid",
    "B27": "dec_market1_product3_priceInvalid",
    "B28": "dec_market2_product3_priceInvalid",
    "B29": "dec_market3_product3_priceInvalid",
    "B31": "dec_market1_product1_deliveredQInvalid",
    "B32": "dec_market2_product1_deliveredQInvalid",
    "B33": "dec_market3_product1_deliveredQInvalid",
    "B34": "dec_market1_product2_deliveredQInvalid",
    "B35": "dec_market2_product2_deliveredQInvalid",
    "B36": "dec_market3_product2_deliveredQInvalid",
    "B37": "dec_market1_product3_deliveredQInvalid",
    "B38": "dec_market2_product3_deliveredQInvalid",
    "B39": "dec_market3_product3_deliveredQInvalid",
    "B41": "dec_product1_improvementsTakeupInvalid",
    "B42": "dec_product2_improvementsTakeupInvalid",
    "B43": "dec_product3_improvementsTakeupInvalid",
    "B44": "dec_product1_developmentBudgetInvalid",
    "B45": "dec_product2_developmentBudgetInvalid",
    "B46": "dec_product3_developmentBudgetInvalid",
    "B47": "dec_product1_assemblyTimeInvalid",
    "B48": "dec_product2_assemblyTimeInvalid",
    "B49": "dec_product3_assemblyTimeInvalid",
    "B51": "dec_product1_premiumMaterialPropertionInvalid",
    "B52": "dec_product2_premiumMaterialPropertionInvalid",
    "B53": "dec_product3_premiumMaterialPropertionInvalid",
    "B54": "dec_subProduct1_subcontractQInvalid",
    "B55": "dec_subProduct3_subcontractQInvalid",
    "B56": "dec_subProduct5_subcontractQInvalid",
    "B61": "dec_agent1_appointedNbInvalid",
    "B62": "dec_agent1_supportInvalid",
    "B63": "dec_agent1_commissionRateInvalid",
    "B64": "dec_agent2_appointedNbInvalid",
    "B65": "dec_agent2_supportInvalid",
    "B66": "dec_agent2_commissionRateInvalid",
    "B68": "dec_agent3_supportInvalid",
    "B69": "dec_agent3_commissionRateInvalid",
    "B57": "dec_material1_purchase1_quantityInvalid",
    "B58": "dec_material1_purchase2_quantityInvalid",
    "B59": "dec_material1_purchase3_quantityInvalid",
    "B75": "dec_machinery1_maintenanceHoursInvalid",
    "B73": "dec_machinery1_type1_boughtNbInvalid",
    "B74": "dec_machinery1_type1_soldNbInvalid",
    "B76": "dec_shiftLevelInvalid",
    "B77": "dec_eCommerce1_websitePortsNbInvalid",
    "B78": "dec_eCommerce1_websiteDevBudgetInvalid",
    "B81": "dec_worker1_hireInvalid",
    "B82": "dec_worker1_trainedNbInvalid",
    "B83": "dec_worker1_hourlyWageRateInvalid",
    "B85": "dec_managementBudgetInvalid",
    "B86": "dec_staffTrainingDaysInvalid",
    "B91": "dec_sharesVariationInvalid",
    "B92": "dec_dividendInvalid",
    "B93": "dec_bankAccount1_termLoansInvalid",
    "B94": "dec_bankAccount1_termDepositInvalid",
    "B72": "dec_factory1_extensionInvalid",
    "B99": "dec_insurance1_planInvalid",
    "B97": "dec_orderMarketSharesInfoInvalid",
    "B98": "dec_orderCorporateActivityInfoInvalid",
};
module.exports = Mapping;
//# sourceMappingURL=Mapping.js.map