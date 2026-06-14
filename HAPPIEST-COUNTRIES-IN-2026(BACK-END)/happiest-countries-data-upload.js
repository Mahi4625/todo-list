const uploadBtn = document.getElementById("post-data-btn");

const the195CountriesList = [
  {
    "country_name": "Finland",
    "rank": 1,
    "happiness_score": 7.764,
    "flag_url": "https://flagcdn.com/fi.svg",
    "description": "Finland ranks 1st because trust is deeply embedded in everyday life. Citizens consistently report confidence in public institutions, fellow citizens, and the fairness of society.\n\nThe country performs exceptionally well across every major World Happiness Report factor, including social support, healthy life expectancy, freedom, and income.\n\nUnlike many countries that excel in only one or two areas, Finland maintains strength across nearly all dimensions of well-being.\n\nIts position at the top reflects a society where trust, security, and opportunity work together to produce the highest reported life satisfaction in the world."
  },
  {
    "country_name": "Iceland",
    "rank": 2,
    "happiness_score": 7.540,
    "flag_url": "https://flagcdn.com/is.svg",
    "description": "Iceland ranks 2nd because people feel strongly connected to one another. Social support remains one of the country's most important happiness advantages.\n\nCitizens report high levels of freedom, equality, and personal security. Most people feel they have dependable relationships and meaningful community ties.\n\nIts geographic isolation creates practical challenges, yet these have not weakened social cohesion.\n\nThe country's ranking reflects the power of close-knit communities combined with freedom and trust."
  },
  {
    "country_name": "Denmark",
    "rank": 3,
    "happiness_score": 7.539,
    "flag_url": "https://flagcdn.com/dk.svg",
    "description": "Denmark ranks 3rd because economic security is widely shared throughout society. Citizens generally feel protected against major life risks.\n\nThe country scores highly in social support, institutional trust, and work-life balance. These strengths reduce uncertainty and improve daily well-being.\n\nStrong welfare systems help ensure that setbacks do not become long-term hardships.\n\nIts ranking reflects a society that prioritizes security, equality, and quality of life."
  },
  {
    "country_name": "Costa Rica",
    "rank": 4,
    "happiness_score": 7.439,
    "flag_url": "https://flagcdn.com/cr.svg",
    "description": "Costa Rica ranks 4th because citizens report unusually high life satisfaction relative to national income levels. Happiness in the country extends beyond economic measures.\n\nHealthy life expectancy is among its greatest strengths. Many people enjoy active lifestyles supported by strong social relationships.\n\nCosta Rica demonstrates that wealth alone does not determine happiness outcomes.\n\nIts ranking reflects the importance of health, community, and positive life evaluations."
  },
  {
    "country_name": "Sweden",
    "rank": 5,
    "happiness_score": 7.255,
    "flag_url": "https://flagcdn.com/se.svg",
    "description": "Sweden ranks 5th because citizens enjoy a high level of personal autonomy. People generally feel free to make choices about how they live, work, and plan for the future.\n\nThe country performs strongly in education, healthcare, social support, and economic opportunity.\n\nPublic trust remains high, helping institutions function effectively and predictably.\n\nIts ranking reflects a balance between individual freedom and collective security."
  },
  {
    "country_name": "Norway",
    "rank": 6,
    "happiness_score": 7.242,
    "flag_url": "https://flagcdn.com/no.svg",
    "description": "Norway ranks 6th because national prosperity has been translated into broad public well-being. Economic success benefits large portions of the population.\n\nThe country performs strongly in income, health, and social support. Citizens generally enjoy both opportunity and security.\n\nEffective management of national resources has helped maintain long-term stability.\n\nIts ranking reflects how prosperity can contribute to happiness when combined with trust and social protection."
  },
  {
    "country_name": "Netherlands",
    "rank": 7,
    "happiness_score": 7.223,
    "flag_url": "https://flagcdn.com/nl.svg",
    "description": "The Netherlands ranks 7th because citizens report a strong sense of balance in life. Many people are satisfied with both personal relationships and daily living conditions.\n\nThe country performs well in health, social support, and freedom to make life choices.\n\nOpen civic culture and community participation strengthen cooperation and trust.\n\nIts ranking reflects the benefits of combining personal freedom with strong social foundations."
  },
  {
    "country_name": "Israel",
    "rank": 8,
    "happiness_score": 7.187,
    "flag_url": "https://flagcdn.com/il.svg",
    "description": "Israel ranks 8th because social connectedness remains a major source of strength. Family networks and community ties contribute heavily to overall well-being.\n\nThe country performs strongly in social support and healthy life expectancy. Many citizens report having dependable support during difficult times.\n\nRegional security concerns continue to influence daily life and long-term outlooks.\n\nIts ranking reflects exceptional social resilience and strong interpersonal relationships."
  },
  {
    "country_name": "Luxembourg",
    "rank": 9,
    "happiness_score": 7.063,
    "flag_url": "https://flagcdn.com/lu.svg",
    "description": "Luxembourg ranks 9th because economic prosperity remains one of the strongest in the world. High income levels contribute significantly to life satisfaction.\n\nCitizens benefit from quality healthcare, social protections, and public services.\n\nRapid growth and housing pressures present challenges that accompany economic success.\n\nIts ranking reflects the advantages of combining prosperity with effective institutions and social support."
  },
  {
    "country_name": "Switzerland",
    "rank": 10,
    "happiness_score": 7.018,
    "flag_url": "https://flagcdn.com/ch.svg",
    "description": "Switzerland ranks 10th because stability is a defining feature of national life. Citizens generally experience confidence in both institutions and future prospects.\n\nThe country performs strongly in health, income, and public trust. These factors support consistently high well-being.\n\nIts decentralized political structure encourages participation and local accountability.\n\nIts ranking reflects the long-term benefits of stability, prosperity, and institutional confidence."
  },
  {
    "country_name": "New Zealand",
    "rank": 11,
    "happiness_score": 6.995,
    "flag_url": "https://flagcdn.com/nz.svg",
    "description": "New Zealand ranks 11th because citizens report a strong sense of personal freedom and life satisfaction. Many people feel able to pursue their goals while maintaining a good quality of life.\n\nThe country performs well in social support, trust, and healthy life expectancy.\n\nIts distance from major global markets creates economic limitations not faced by some higher-ranked countries.\n\nIts ranking reflects a combination of freedom, community trust, and overall well-being."
  },
  {
    "country_name": "Mexico",
    "rank": 12,
    "happiness_score": 6.972,
    "flag_url": "https://flagcdn.com/mx.svg",
    "description": "Mexico ranks 12th because citizens report some of the strongest social support levels in the world. Family relationships remain a central part of life.\n\nMany people feel they have relatives and friends they can depend on during difficult situations.\n\nThe country's happiness ranking exceeds what income levels alone would predict.\n\nIts position highlights the importance of social relationships as a driver of well-being."
  },
  {
    "country_name": "Ireland",
    "rank": 13,
    "happiness_score": 6.928,
    "flag_url": "https://flagcdn.com/ie.svg",
    "description": "Ireland ranks 13th because economic growth has been accompanied by strong improvements in living standards. Citizens generally report positive evaluations of their lives.\n\nThe country performs well in income, social support, and personal freedom.\n\nMaintaining affordability and housing access remains an important challenge.\n\nIts ranking reflects a combination of prosperity, opportunity, and social well-being."
  },
  {
    "country_name": "Belgium",
    "rank": 14,
    "happiness_score": 6.926,
    "flag_url": "https://flagcdn.com/be.svg",
    "description": "Belgium ranks 14th because citizens benefit from strong healthcare systems and extensive social protections. These institutions contribute significantly to quality of life.\n\nThe country performs particularly well in healthy life expectancy and access to public services.\n\nRegional and political complexity can sometimes affect public confidence and governance perceptions.\n\nIts ranking reflects the contribution of health, stability, and social security to happiness."
  },
  {
    "country_name": "Australia",
    "rank": 15,
    "happiness_score": 6.916,
    "flag_url": "https://flagcdn.com/au.svg",
    "description": "Australia ranks 15th because citizens enjoy a high standard of living alongside substantial personal freedom. Many people report strong satisfaction with their quality of life.\n\nThe country performs well in health, income, and opportunities for individual choice.\n\nGeographic distance and rising living costs create pressures that influence overall well-being.\n\nIts ranking reflects a successful blend of prosperity, freedom, and long-term opportunity."
  },
  {
    "country_name": "Kosovo",
    "rank": 16,
    "happiness_score": 6.910,
    "flag_url": "https://flagcdn.com/xk.svg",
    "description": "Kosovo ranks 16th because citizens report remarkably strong social support and optimism about their lives. Its happiness level is notably higher than many countries with similar economic resources.\n\nFamily networks and community ties remain central to everyday life. Many people feel they have reliable support during difficult times.\n\nEconomic opportunities remain more limited than in many Western European countries, affecting long-term prospects for some citizens.\n\nIts ranking reflects the powerful role that social support and positive life evaluations play in shaping happiness."
  },
  {
    "country_name": "Germany",
    "rank": 17,
    "happiness_score": 6.882,
    "flag_url": "https://flagcdn.com/de.svg",
    "description": "Germany ranks 17th because citizens benefit from a strong economy, reliable institutions, and high living standards. Stability remains one of the country's greatest strengths.\n\nThe country performs well in income, healthcare, and social protections. These factors provide security throughout different stages of life.\n\nCompared with the highest-ranked Nordic countries, social trust and life evaluations are slightly less positive.\n\nIts ranking reflects the contribution of economic strength, institutional reliability, and public services to well-being."
  },
  {
    "country_name": "Slovenia",
    "rank": 18,
    "happiness_score": 6.868,
    "flag_url": "https://flagcdn.com/si.svg",
    "description": "Slovenia ranks 18th because citizens enjoy a high quality of life supported by strong healthcare and social systems. The country consistently performs above expectations for its size.\n\nHealthy life expectancy and social support contribute positively to overall well-being. Many people report satisfaction with their daily lives.\n\nIts smaller economy limits some opportunities compared with larger European nations.\n\nIts ranking reflects a successful balance of health, stability, and social support."
  },
  {
    "country_name": "Austria",
    "rank": 19,
    "happiness_score": 6.845,
    "flag_url": "https://flagcdn.com/at.svg",
    "description": "Austria ranks 19th because citizens benefit from strong public services and a high standard of living. Quality healthcare and education contribute significantly to well-being.\n\nThe country performs well in income, social support, and healthy life expectancy. These strengths create long-term stability.\n\nRising costs of living in some urban areas remain a concern for parts of the population.\n\nIts ranking reflects the advantages of combining prosperity, health, and social security."
  },
  {
    "country_name": "Czechia",
    "rank": 20,
    "happiness_score": 6.821,
    "flag_url": "https://flagcdn.com/cz.svg",
    "description": "Czechia ranks 20th because citizens report increasing life satisfaction supported by economic progress and social stability. The country has improved steadily in happiness rankings over time.\n\nStrong healthcare outcomes and relatively low unemployment contribute positively to well-being.\n\nIncome levels remain below some Western European countries ranked nearby.\n\nIts ranking reflects a combination of stability, development, and improving quality of life."
  },
  {
    "country_name": "United Arab Emirates",
    "rank": 21,
    "happiness_score": 6.821,
    "flag_url": "https://flagcdn.com/ae.svg",
    "description": "The United Arab Emirates ranks 21st because high living standards and modern infrastructure contribute strongly to life satisfaction. Economic opportunity remains a major strength.\n\nThe country performs well in income, public services, and perceptions of future opportunity.\n\nIts diverse population creates unique social and cultural dynamics that differ from most countries in the rankings.\n\nIts ranking reflects the influence of prosperity, development, and ambition on well-being."
  },
  {
    "country_name": "Saudi Arabia",
    "rank": 22,
    "happiness_score": 6.817,
    "flag_url": "https://flagcdn.com/sa.svg",
    "description": "Saudi Arabia ranks 22nd because rising life satisfaction has accompanied major economic and social changes. Citizens report improved evaluations of their quality of life.\n\nIncome levels, public investment, and expanding opportunities contribute positively to happiness.\n\nThe country continues to balance rapid modernization with social transformation.\n\nIts ranking reflects growing optimism and improving living conditions across many areas of society."
  },
  {
    "country_name": "United States",
    "rank": 23,
    "happiness_score": 6.816,
    "flag_url": "https://flagcdn.com/us.svg",
    "description": "The United States ranks 23rd because strong economic resources and personal freedom remain important strengths. The country continues to perform well in income and innovation.\n\nCitizens benefit from significant opportunities for education, entrepreneurship, and career growth.\n\nLower social trust and increasing social fragmentation prevent the country from ranking higher despite its wealth.\n\nIts ranking reflects a mix of exceptional opportunity alongside challenges related to social cohesion."
  },
  {
    "country_name": "Poland",
    "rank": 24,
    "happiness_score": 6.768,
    "flag_url": "https://flagcdn.com/pl.svg",
    "description": "Poland ranks 24th because citizens have experienced substantial improvements in living standards during recent decades. Economic progress has translated into higher life satisfaction.\n\nThe country performs increasingly well in income, health, and social conditions.\n\nDifferences between regions and demographic groups continue to influence overall well-being.\n\nIts ranking reflects the positive impact of long-term economic and social development."
  },
  {
    "country_name": "Canada",
    "rank": 25,
    "happiness_score": 6.741,
    "flag_url": "https://flagcdn.com/ca.svg",
    "description": "Canada ranks 25th because citizens benefit from strong social support, public services, and a generally inclusive society. Many people report feeling secure and supported.\n\nThe country performs well in health, freedom, and community trust. These factors contribute to positive life evaluations.\n\nHousing affordability and cost-of-living pressures have become growing concerns in recent years.\n\nIts ranking reflects a balance between opportunity, social support, and quality public institutions."
  },
  {
    "country_name": "Taiwan Province of China",
    "rank": 26,
    "happiness_score": 6.714,
    "flag_url": "https://flagcdn.com/tw.svg",
    "description": "Taiwan Province of China ranks 26th because strong healthcare systems and social stability contribute significantly to well-being. Citizens benefit from some of the best health outcomes in Asia.\n\nThe country performs well in life expectancy, safety, and public services.\n\nWork-related pressures and economic competition influence overall life satisfaction for some groups.\n\nIts ranking reflects the strengths of health, stability, and effective institutions."
  },
  {
    "country_name": "Belize",
    "rank": 27,
    "happiness_score": 6.711,
    "flag_url": "https://flagcdn.com/bz.svg",
    "description": "Belize ranks 27th because citizens report relatively positive life evaluations despite modest economic resources. Social relationships contribute strongly to well-being.\n\nMany people value close family ties and community connections that provide support during difficult periods.\n\nEconomic opportunities remain more limited than in many countries ranked nearby.\n\nIts ranking demonstrates how social support can help sustain happiness beyond income levels alone."
  },
  {
    "country_name": "Lithuania",
    "rank": 28,
    "happiness_score": 6.704,
    "flag_url": "https://flagcdn.com/lt.svg",
    "description": "Lithuania ranks 28th because it has achieved one of the most significant improvements in happiness among European countries in recent years. Citizens increasingly report better life evaluations.\n\nEconomic growth, rising incomes, and improved public services have contributed positively to well-being.\n\nPopulation decline through emigration remains an ongoing demographic challenge.\n\nIts ranking reflects the gains that can occur when economic progress is matched by improvements in quality of life."
  },
  {
    "country_name": "United Kingdom",
    "rank": 29,
    "happiness_score": 6.694,
    "flag_url": "https://flagcdn.com/gb.svg",
    "description": "The United Kingdom ranks 29th because citizens benefit from strong institutions, quality healthcare, and personal freedoms. These factors support overall well-being.\n\nThe country performs reasonably well across most World Happiness Report indicators rather than relying on one dominant strength.\n\nRegional inequalities and economic pressures affect happiness outcomes across different parts of the country.\n\nIts ranking reflects a broad foundation of institutional strength and social opportunity."
  },
  {
    "country_name": "Serbia",
    "rank": 30,
    "happiness_score": 6.691,
    "flag_url": "https://flagcdn.com/rs.svg",
    "description": "Serbia ranks 30th because citizens report stronger life satisfaction than income measures alone would predict. Social relationships remain an important source of well-being.\n\nThe country has made progress in economic conditions and quality of life over recent years.\n\nIncome levels and opportunities still lag behind many higher-ranked European countries.\n\nIts ranking reflects a combination of resilience, improving living standards, and strong social foundations."
  },
  {
    "country_name": "Uruguay",
    "rank": 31,
    "happiness_score": 6.635,
    "flag_url": "https://flagcdn.com/uy.svg",
    "description": "Uruguay ranks 31st because democratic stability and social protections contribute strongly to life satisfaction. Citizens generally report confidence in public institutions compared with many countries in the region.\n\nThe country performs well in social support, health, and personal freedoms. These strengths help create a secure environment for long-term well-being.\n\nIts smaller economy limits some opportunities available in higher-ranked nations.\n\nIts ranking reflects a combination of stability, trust, and quality of life that makes Uruguay one of Latin America's happiest countries."
  },
  {
    "country_name": "Brazil",
    "rank": 32,
    "happiness_score": 6.634,
    "flag_url": "https://flagcdn.com/br.svg",
    "description": "Brazil ranks 32nd because strong social energy and interpersonal relationships remain important drivers of happiness. Many citizens report meaningful connections with family and friends.\n\nThe country performs better in social support than many economic indicators would suggest.\n\nLarge inequalities and public safety concerns continue to affect overall life evaluations.\n\nIts ranking reflects the strength of human relationships and social connection despite persistent challenges."
  },
  {
    "country_name": "Kazakhstan",
    "rank": 33,
    "happiness_score": 6.633,
    "flag_url": "https://flagcdn.com/kz.svg",
    "description": "Kazakhstan ranks 33rd because economic development and improving living standards have contributed to rising life satisfaction. Citizens increasingly report positive evaluations of their lives.\n\nThe country benefits from natural resources, expanding infrastructure, and improving public services.\n\nDependence on commodity markets can create economic uncertainty over time.\n\nIts ranking reflects the impact of development, stability, and growing opportunities on well-being."
  },
  {
    "country_name": "Romania",
    "rank": 34,
    "happiness_score": 6.629,
    "flag_url": "https://flagcdn.com/ro.svg",
    "description": "Romania ranks 34th because sustained economic progress has improved quality of life across much of the country. Happiness levels have risen significantly compared with previous decades.\n\nCitizens benefit from better incomes, healthcare access, and opportunities than in the past.\n\nRegional disparities and migration continue to influence national well-being.\n\nIts ranking reflects the positive effects of long-term social and economic advancement."
  },
  {
    "country_name": "France",
    "rank": 35,
    "happiness_score": 6.586,
    "flag_url": "https://flagcdn.com/fr.svg",
    "description": "France ranks 35th because citizens benefit from strong healthcare systems and extensive social protections. These institutions provide security throughout different stages of life.\n\nThe country performs particularly well in healthy life expectancy and access to public services.\n\nPublic satisfaction with institutions is lower than in several higher-ranked European countries.\n\nIts ranking reflects the contribution of health, social security, and quality public services to well-being."
  },
  {
    "country_name": "Singapore",
    "rank": 36,
    "happiness_score": 6.585,
    "flag_url": "https://flagcdn.com/sg.svg",
    "description": "Singapore ranks 36th because exceptional governance, public safety, and economic prosperity contribute strongly to life satisfaction. Citizens benefit from one of the world's most efficient public systems.\n\nThe country performs extremely well in income, health, education, and infrastructure.\n\nWork intensity and high living costs can place pressure on daily well-being.\n\nIts ranking reflects how effective institutions and prosperity can create a high quality of life."
  },
  {
    "country_name": "El Salvador",
    "rank": 37,
    "happiness_score": 6.578,
    "flag_url": "https://flagcdn.com/sv.svg",
    "description": "El Salvador ranks 37th because improvements in public security have positively influenced life evaluations. Citizens increasingly report feeling safer in their daily lives.\n\nFamily relationships and social support remain important contributors to happiness.\n\nEconomic challenges continue to affect opportunities for many households.\n\nIts ranking reflects the impact that greater security and social support can have on well-being."
  },
  {
    "country_name": "Italy",
    "rank": 38,
    "happiness_score": 6.574,
    "flag_url": "https://flagcdn.com/it.svg",
    "description": "Italy ranks 38th because strong family traditions and high life expectancy contribute positively to overall well-being. Social relationships remain deeply rooted in daily life.\n\nThe country performs well in health outcomes and cultural quality of life.\n\nEconomic stagnation and regional differences continue to limit higher happiness scores.\n\nIts ranking reflects the balance between strong social traditions and ongoing economic challenges."
  },
  {
    "country_name": "Panama",
    "rank": 39,
    "happiness_score": 6.547,
    "flag_url": "https://flagcdn.com/pa.svg",
    "description": "Panama ranks 39th because citizens generally report positive life evaluations supported by economic growth and social connections. The country performs better than many peers in the region.\n\nStrategic economic advantages have created opportunities and improved living standards.\n\nNot all groups benefit equally from economic progress, creating differences in well-being.\n\nIts ranking reflects a combination of growth, opportunity, and social support."
  },
  {
    "country_name": "Kuwait",
    "rank": 40,
    "happiness_score": 6.543,
    "flag_url": "https://flagcdn.com/kw.svg",
    "description": "Kuwait ranks 40th because high income levels and economic security contribute significantly to life satisfaction. Citizens benefit from substantial national resources.\n\nThe country performs strongly in income and access to public services.\n\nIts happiness outcomes are not as high as some nations with stronger social trust and community engagement.\n\nIts ranking reflects the importance of prosperity while highlighting that income alone does not determine happiness."
  },
  {
    "country_name": "Spain",
    "rank": 41,
    "happiness_score": 6.466,
    "flag_url": "https://flagcdn.com/es.svg",
    "description": "Spain ranks 41st because citizens enjoy long life expectancy and strong social relationships. These factors contribute significantly to overall well-being.\n\nThe country performs particularly well in health and lifestyle-related measures.\n\nEconomic uncertainty and youth employment challenges continue to influence happiness levels.\n\nIts ranking reflects the benefits of health and social connection alongside economic pressures."
  },
  {
    "country_name": "Guatemala",
    "rank": 42,
    "happiness_score": 6.465,
    "flag_url": "https://flagcdn.com/gt.svg",
    "description": "Guatemala ranks 42nd because exceptionally strong social support helps sustain positive life evaluations. Citizens frequently report having people they can rely on during difficult times.\n\nFamily and community networks remain central pillars of well-being.\n\nIncome levels remain relatively modest compared with many countries ranked nearby.\n\nIts ranking demonstrates the powerful role that social support can play in happiness."
  },
  {
    "country_name": "Malta",
    "rank": 43,
    "happiness_score": 6.446,
    "flag_url": "https://flagcdn.com/mt.svg",
    "description": "Malta ranks 43rd because citizens benefit from a high quality of life within a small and connected society. Community engagement remains an important strength.\n\nThe country performs well in health, social support, and personal safety.\n\nPopulation density and infrastructure pressures create challenges associated with growth.\n\nIts ranking reflects the advantages of strong communities, stability, and well-developed public services."
  },
  {
    "country_name": "Argentina",
    "rank": 44,
    "happiness_score": 6.397,
    "flag_url": "https://flagcdn.com/ar.svg",
    "description": "Argentina ranks 44th because citizens continue to report strong social relationships despite recurring economic instability. Family and friendship networks remain major sources of support.\n\nThe country performs better in social connection than many economic indicators would suggest.\n\nInflation and financial uncertainty weigh on long-term life evaluations.\n\nIts ranking reflects the resilience of social bonds during periods of economic difficulty."
  },
  {
    "country_name": "Vietnam",
    "rank": 45,
    "happiness_score": 6.352,
    "flag_url": "https://flagcdn.com/vn.svg",
    "description": "Vietnam ranks 45th because rapid economic progress has improved living standards for millions of people. Citizens increasingly report positive life evaluations.\n\nThe country has achieved significant gains in development, health, and poverty reduction over recent decades.\n\nIncome levels still remain below many higher-ranked countries.\n\nIts ranking reflects the positive influence of sustained development and rising opportunities on well-being."
  },
  {
    "country_name": "Estonia",
    "rank": 46,
    "happiness_score": 6.321,
    "flag_url": "https://flagcdn.com/ee.svg",
    "description": "Estonia ranks 46th because digital innovation and efficient public services have improved quality of life. Citizens benefit from one of the world's most advanced digital societies.\n\nThe country performs well in education, governance, and institutional effectiveness. These strengths contribute to long-term well-being.\n\nPopulation decline and demographic challenges continue to affect future growth.\n\nIts ranking reflects how innovation, efficiency, and stability can support happiness."
  },
  {
    "country_name": "Bosnia and Herzegovina",
    "rank": 47,
    "happiness_score": 6.310,
    "flag_url": "https://flagcdn.com/ba.svg",
    "description": "Bosnia and Herzegovina ranks 47th because strong personal relationships remain a key source of well-being. Family and friendship networks provide support throughout daily life.\n\nCitizens often place high value on social belonging and close interpersonal connections.\n\nPolitical complexity and economic limitations continue to influence life evaluations.\n\nIts ranking reflects the enduring importance of social bonds despite structural challenges."
  },
  {
    "country_name": "Latvia",
    "rank": 48,
    "happiness_score": 6.303,
    "flag_url": "https://flagcdn.com/lv.svg",
    "description": "Latvia ranks 48th because living standards and life satisfaction have improved steadily over recent years. Economic development has contributed positively to overall well-being.\n\nThe country performs increasingly well in health, income, and public services.\n\nDemographic pressures and emigration remain important long-term concerns.\n\nIts ranking reflects meaningful progress in quality of life and social development."
  },
  {
    "country_name": "Jamaica",
    "rank": 49,
    "happiness_score": 6.293,
    "flag_url": "https://flagcdn.com/jm.svg",
    "description": "Jamaica ranks 49th because strong community spirit and cultural identity contribute positively to happiness. Citizens often report meaningful social connections.\n\nFamily relationships and local support networks remain important sources of resilience.\n\nEconomic constraints and public safety concerns continue to affect well-being.\n\nIts ranking reflects the strength of social and cultural connections in everyday life."
  },
  {
    "country_name": "Chile",
    "rank": 50,
    "happiness_score": 6.292,
    "flag_url": "https://flagcdn.com/cl.svg",
    "description": "Chile ranks 50th because decades of development have improved living standards and expanded opportunities. Citizens generally benefit from stronger economic conditions than many neighboring countries.\n\nThe country performs reasonably well in health, education, and public services.\n\nConcerns about inequality continue to influence how people evaluate their lives.\n\nIts ranking reflects the balance between economic progress and social expectations."
  },
  {
    "country_name": "Nicaragua",
    "rank": 51,
    "happiness_score": 6.284,
    "flag_url": "https://flagcdn.com/ni.svg",
    "description": "Nicaragua ranks 51st because strong interpersonal relationships contribute significantly to life satisfaction. Citizens frequently report dependable support from family and friends.\n\nSocial support levels are higher than income levels alone would predict.\n\nEconomic limitations continue to affect opportunities for many households.\n\nIts ranking highlights the importance of human relationships in shaping happiness."
  },
  {
    "country_name": "Thailand",
    "rank": 52,
    "happiness_score": 6.222,
    "flag_url": "https://flagcdn.com/th.svg",
    "description": "Thailand ranks 52nd because cultural values emphasizing harmony and social connection contribute positively to well-being. Many citizens report satisfaction with their personal relationships.\n\nThe country benefits from strong community ties and improving living standards.\n\nEconomic disparities remain a challenge across different regions.\n\nIts ranking reflects the influence of culture, community, and development on happiness."
  },
  {
    "country_name": "Uzbekistan",
    "rank": 53,
    "happiness_score": 6.212,
    "flag_url": "https://flagcdn.com/uz.svg",
    "description": "Uzbekistan ranks 53rd because citizens report high levels of social support and positive life evaluations. Family networks remain a major source of strength.\n\nThe country has benefited from economic reforms and growing opportunities in recent years.\n\nIncome levels remain below those of many higher-ranked countries.\n\nIts ranking reflects the combination of social cohesion and improving development."
  },
  {
    "country_name": "Slovakia",
    "rank": 54,
    "happiness_score": 6.204,
    "flag_url": "https://flagcdn.com/sk.svg",
    "description": "Slovakia ranks 54th because economic stability and improving public services contribute positively to life satisfaction. Citizens benefit from relatively secure living conditions.\n\nThe country performs reasonably well in health, education, and social protections.\n\nTrust levels remain lower than in several higher-ranked European nations.\n\nIts ranking reflects steady progress supported by stability and public services."
  },
  {
    "country_name": "Bahrain",
    "rank": 55,
    "happiness_score": 6.198,
    "flag_url": "https://flagcdn.com/bh.svg",
    "description": "Bahrain ranks 55th because economic prosperity and public investment contribute significantly to well-being. Citizens benefit from relatively high living standards.\n\nThe country performs well in infrastructure, healthcare, and access to services.\n\nIts happiness outcomes are moderated by factors beyond income and material conditions.\n\nIts ranking reflects the contribution of prosperity and development to quality of life."
  },
  {
    "country_name": "Philippines",
    "rank": 56,
    "happiness_score": 6.181,
    "flag_url": "https://flagcdn.com/ph.svg",
    "description": "The Philippines ranks 56th because optimism remains a defining feature of how many citizens evaluate their lives. Positive expectations contribute significantly to overall well-being.\n\nStrong family connections and social support provide emotional resilience during difficult times.\n\nEconomic challenges and exposure to natural disasters continue to affect daily life.\n\nIts ranking reflects the role of optimism and social support in sustaining happiness."
  },
  {
    "country_name": "Paraguay",
    "rank": 57,
    "happiness_score": 6.178,
    "flag_url": "https://flagcdn.com/py.svg",
    "description": "Paraguay ranks 57th because it consistently records some of the world's highest levels of perceived social support. Citizens often report having someone to rely on when needed.\n\nClose family structures and strong community networks contribute heavily to life satisfaction.\n\nEconomic resources remain more limited than in many countries ranked nearby.\n\nIts ranking demonstrates the exceptional value of social support in the World Happiness Report."
  },
  {
    "country_name": "Oman",
    "rank": 58,
    "happiness_score": 6.171,
    "flag_url": "https://flagcdn.com/om.svg",
    "description": "Oman ranks 58th because stability and public investment have helped create a relatively secure quality of life. Citizens benefit from improvements in infrastructure and services.\n\nThe country performs reasonably well in health and living conditions.\n\nEconomic diversification remains an important long-term objective.\n\nIts ranking reflects the contribution of stability and development to overall well-being."
  },
  {
    "country_name": "Ecuador",
    "rank": 59,
    "happiness_score": 6.165,
    "flag_url": "https://flagcdn.com/ec.svg",
    "description": "Ecuador ranks 59th because citizens often place high value on family relationships and social connectedness. These factors contribute positively to life satisfaction.\n\nThe country benefits from strong community networks and cultural cohesion.\n\nEconomic volatility continues to influence happiness outcomes.\n\nIts ranking reflects the balance between social strengths and economic uncertainty."
  },
  {
    "country_name": "Montenegro",
    "rank": 60,
    "happiness_score": 6.163,
    "flag_url": "https://flagcdn.com/me.svg",
    "description": "Montenegro ranks 60th because citizens benefit from strong social ties and a relatively relaxed lifestyle. Quality-of-life factors contribute positively to overall well-being.\n\nThe country performs reasonably well in social support and personal relationships.\n\nIts small economy limits opportunities available in higher-ranked European countries.\n\nIts ranking reflects the influence of social connection, lifestyle, and stability on happiness."
  },
  {
    "country_name": "Japan",
    "rank": 61,
    "happiness_score": 6.147,
    "flag_url": "https://flagcdn.com/jp.svg",
    "description": "Japan ranks 61st because exceptional health outcomes and long life expectancy contribute strongly to well-being. Citizens enjoy some of the longest lives in the world.\n\nThe country performs well in safety, healthcare, infrastructure, and public order. These strengths create stability in everyday life.\n\nLower levels of perceived social support and increasing social isolation affect happiness outcomes.\n\nIts ranking reflects the balance between world-leading health achievements and social challenges."
  },
  {
    "country_name": "Cyprus",
    "rank": 62,
    "happiness_score": 6.141,
    "flag_url": "https://flagcdn.com/cy.svg",
    "description": "Cyprus ranks 62nd because its Mediterranean lifestyle and strong family culture contribute positively to life satisfaction. Social relationships remain an important source of well-being.\n\nThe country benefits from relatively good health outcomes and a pleasant quality of life.\n\nEconomic vulnerabilities and geopolitical considerations continue to influence public outlook.\n\nIts ranking reflects the contribution of lifestyle, community, and stability to happiness."
  },
  {
    "country_name": "Honduras",
    "rank": 63,
    "happiness_score": 6.124,
    "flag_url": "https://flagcdn.com/hn.svg",
    "description": "Honduras ranks 63rd because strong family networks provide support that extends beyond economic conditions. Citizens often rely on close personal relationships during difficult times.\n\nSocial support levels remain relatively strong compared with income levels.\n\nSecurity concerns and economic challenges continue to affect daily life.\n\nIts ranking demonstrates the importance of social bonds in sustaining well-being."
  },
  {
    "country_name": "Dominican Republic",
    "rank": 64,
    "happiness_score": 6.117,
    "flag_url": "https://flagcdn.com/do.svg",
    "description": "The Dominican Republic ranks 64th because many citizens report positive life evaluations supported by strong social connections. Optimism contributes significantly to overall happiness.\n\nEconomic growth has improved opportunities and living standards for many households.\n\nNot all communities benefit equally from economic progress.\n\nIts ranking reflects the combined influence of optimism, social support, and development."
  },
  {
    "country_name": "China",
    "rank": 65,
    "happiness_score": 6.116,
    "flag_url": "https://flagcdn.com/cn.svg",
    "description": "China ranks 65th because decades of economic transformation have improved living standards for hundreds of millions of people. Rising prosperity has influenced life satisfaction.\n\nThe country has achieved major gains in infrastructure, healthcare access, and poverty reduction.\n\nRapid social and economic change has also introduced new pressures and expectations.\n\nIts ranking reflects the impact of development and modernization on well-being."
  },
  {
    "country_name": "Kyrgyzstan",
    "rank": 66,
    "happiness_score": 6.112,
    "flag_url": "https://flagcdn.com/kg.svg",
    "description": "Kyrgyzstan ranks 66th because close family structures and community support remain central to daily life. Social cohesion contributes positively to happiness.\n\nMany citizens report having dependable relationships that provide assistance during challenging periods.\n\nEconomic opportunities remain more limited than in many higher-ranked countries.\n\nIts ranking highlights the value of social support in shaping life satisfaction."
  },
  {
    "country_name": "Republic of Korea",
    "rank": 67,
    "happiness_score": 6.038,
    "flag_url": "https://flagcdn.com/kr.svg",
    "description": "The Republic of Korea ranks 67th because rapid economic success has created high living standards and world-class infrastructure. Citizens benefit from strong educational and technological development.\n\nThe country performs well in health, safety, and economic opportunity.\n\nIntense academic and workplace pressures continue to influence overall well-being.\n\nIts ranking reflects both the achievements and social demands of a highly developed society."
  },
  {
    "country_name": "Colombia",
    "rank": 68,
    "happiness_score": 6.017,
    "flag_url": "https://flagcdn.com/co.svg",
    "description": "Colombia ranks 68th because strong interpersonal relationships remain a major source of happiness. Citizens often report high levels of emotional support from family and friends.\n\nSocial connections help sustain positive life evaluations despite economic challenges.\n\nPublic safety concerns continue to influence quality of life in some areas.\n\nIts ranking reflects the resilience provided by strong human relationships."
  },
  {
    "country_name": "Portugal",
    "rank": 69,
    "happiness_score": 5.972,
    "flag_url": "https://flagcdn.com/pt.svg",
    "description": "Portugal ranks 69th because high life expectancy and a relaxed quality of life contribute positively to well-being. Citizens benefit from strong healthcare outcomes.\n\nThe country performs well in safety, social support, and overall quality of life.\n\nEconomic growth has been slower than in some higher-ranked nations.\n\nIts ranking reflects the strengths of health, safety, and lifestyle satisfaction."
  },
  {
    "country_name": "Croatia",
    "rank": 70,
    "happiness_score": 5.960,
    "flag_url": "https://flagcdn.com/hr.svg",
    "description": "Croatia ranks 70th because improving living standards have increased overall life satisfaction. Citizens increasingly report positive evaluations of their quality of life.\n\nThe country benefits from strong social ties and relatively good health outcomes.\n\nPopulation decline and outward migration remain ongoing concerns.\n\nIts ranking reflects progress in well-being supported by social and economic improvements."
  },
  {
    "country_name": "Malaysia",
    "rank": 71,
    "happiness_score": 5.945,
    "flag_url": "https://flagcdn.com/my.svg",
    "description": "Malaysia ranks 71st because economic development and cultural diversity contribute positively to life satisfaction. Citizens benefit from expanding opportunities and improving infrastructure.\n\nThe country performs reasonably well in social support and quality of life measures.\n\nDifferences in income and opportunity continue to affect overall well-being.\n\nIts ranking reflects the impact of development, diversity, and social stability."
  },
  {
    "country_name": "Peru",
    "rank": 72,
    "happiness_score": 5.935,
    "flag_url": "https://flagcdn.com/pe.svg",
    "description": "Peru ranks 72nd because strong family relationships remain an important source of support and happiness. Many citizens place significant value on personal connections.\n\nSocial support contributes positively to life evaluations across different communities.\n\nEconomic and political uncertainty continue to influence public confidence.\n\nIts ranking reflects the role of social support in maintaining well-being during challenging periods."
  },
  {
    "country_name": "Mauritius",
    "rank": 73,
    "happiness_score": 5.933,
    "flag_url": "https://flagcdn.com/mu.svg",
    "description": "Mauritius ranks 73rd because political stability and relatively strong institutions support quality of life. The country performs well compared with many nations of similar size.\n\nCitizens benefit from improvements in education, healthcare, and economic development.\n\nIts island geography creates structural limitations for growth and market access.\n\nIts ranking reflects the advantages of stability, development, and institutional strength."
  },
  {
    "country_name": "Hungary",
    "rank": 74,
    "happiness_score": 5.898,
    "flag_url": "https://flagcdn.com/hu.svg",
    "description": "Hungary ranks 74th because rising incomes and improving living conditions have contributed to greater life satisfaction. Well-being has improved compared with previous decades.\n\nThe country performs reasonably well in health and public services.\n\nPublic trust remains lower than in many higher-ranked European nations.\n\nIts ranking reflects economic progress alongside continuing institutional challenges."
  },
  {
    "country_name": "Mongolia",
    "rank": 75,
    "happiness_score": 5.881,
    "flag_url": "https://flagcdn.com/mn.svg",
    "description": "Mongolia ranks 75th because cultural traditions and strong family relationships continue to support well-being. Community identity remains important across the country.\n\nCitizens benefit from close social networks that provide resilience during difficult periods.\n\nEconomic dependence on resource sectors can create fluctuations in living conditions.\n\nIts ranking reflects the balance between social cohesion and economic volatility."
  },
  {
    "country_name": "Trinidad and Tobago",
    "rank": 76,
    "happiness_score": 5.870,
    "flag_url": "https://flagcdn.com/tt.svg",
    "description": "Trinidad and Tobago ranks 76th because relatively high income levels support living standards compared with many countries in the region. Economic resources contribute positively to quality of life.\n\nThe country benefits from cultural diversity and strong community identities.\n\nPublic safety concerns continue to affect overall life evaluations.\n\nIts ranking reflects a combination of prosperity, culture, and social challenges."
  },
  {
    "country_name": "Republic of Moldova",
    "rank": 77,
    "happiness_score": 5.868,
    "flag_url": "https://flagcdn.com/md.svg",
    "description": "The Republic of Moldova ranks 77th because life satisfaction has improved alongside economic and social progress. Citizens increasingly report more positive evaluations of their lives.\n\nStrong family support remains a valuable source of resilience.\n\nMigration and demographic pressures continue to affect communities.\n\nIts ranking reflects gradual improvements in well-being despite structural challenges."
  },
  {
    "country_name": "Bolivia",
    "rank": 78,
    "happiness_score": 5.865,
    "flag_url": "https://flagcdn.com/bo.svg",
    "description": "Bolivia ranks 78th because cultural identity and community ties contribute strongly to overall well-being. Many citizens place significant value on social belonging.\n\nFamily support and local networks help sustain positive life evaluations.\n\nEconomic limitations continue to affect opportunities for many households.\n\nIts ranking reflects the importance of community and cultural connection."
  },
  {
    "country_name": "Russian Federation",
    "rank": 79,
    "happiness_score": 5.858,
    "flag_url": "https://flagcdn.com/ru.svg",
    "description": "The Russian Federation ranks 79th because citizens benefit from improvements in living standards compared with earlier decades. Economic resources and public services contribute to well-being.\n\nThe country performs moderately across several happiness indicators rather than excelling in one dominant area.\n\nGeographic scale and regional differences create uneven life experiences.\n\nIts ranking reflects a balance of development, resources, and ongoing challenges."
  },
  {
    "country_name": "Venezuela",
    "rank": 80,
    "happiness_score": 5.823,
    "flag_url": "https://flagcdn.com/ve.svg",
    "description": "Venezuela ranks 80th because strong family relationships continue to provide support despite difficult economic conditions. Social connections remain an important source of resilience.\n\nMany citizens rely heavily on personal networks during periods of uncertainty.\n\nEconomic instability has had a major impact on living standards and life satisfaction.\n\nIts ranking reflects the persistence of social support amid significant national challenges."
  },
  {
    "country_name": "Libya",
    "rank": 81,
    "happiness_score": 5.819,
    "flag_url": "https://flagcdn.com/ly.svg",
    "description": "Libya ranks 81st because social and family networks continue to provide important support despite years of political instability. Many citizens rely on personal relationships to navigate daily life.\n\nThe country benefits from significant natural resources that provide economic potential. These resources remain an important foundation for future development.\n\nPolitical uncertainty and institutional challenges continue to affect public confidence and quality of life.\n\nIts ranking reflects the resilience of social support systems amid prolonged national difficulties."
  },
  {
    "country_name": "North Macedonia",
    "rank": 82,
    "happiness_score": 5.719,
    "flag_url": "https://flagcdn.com/mk.svg",
    "description": "North Macedonia ranks 82nd because social relationships and community support remain important contributors to well-being. Many citizens report strong personal connections that help sustain life satisfaction.\n\nThe country benefits from gradual improvements in economic conditions and public services. These developments contribute positively to overall quality of life.\n\nIncome levels and opportunities remain below those of many higher-ranked European countries. These factors continue to influence happiness outcomes.\n\nIts ranking reflects the combined effects of social support, development progress, and remaining economic challenges."
  },
  {
    "country_name": "Algeria",
    "rank": 83,
    "happiness_score": 5.714,
    "flag_url": "https://flagcdn.com/dz.svg",
    "description": "Algeria ranks 83rd because family support networks and social stability contribute positively to life evaluations. Strong personal relationships remain important sources of resilience.\n\nCitizens benefit from broad access to education, healthcare, and public services compared with many countries in the region. These strengths support overall well-being.\n\nEconomic diversification and employment opportunities remain ongoing challenges. Such factors continue to affect life satisfaction.\n\nIts ranking reflects the balance between social stability, public support systems, and economic pressures."
  },
  {
    "country_name": "Bulgaria",
    "rank": 84,
    "happiness_score": 5.703,
    "flag_url": "https://flagcdn.com/bg.svg",
    "description": "Bulgaria ranks 84th because living standards and health outcomes have improved considerably over recent decades. These gains have contributed positively to quality of life.\n\nThe country benefits from stronger infrastructure, education, and healthcare than in previous generations. Such progress supports well-being.\n\nPerceptions related to trust and future opportunities continue to influence overall life evaluations. These challenges limit higher happiness outcomes.\n\nIts ranking reflects meaningful social progress alongside continuing concerns about long-term prospects."
  },
  {
    "country_name": "Greece",
    "rank": 85,
    "happiness_score": 5.697,
    "flag_url": "https://flagcdn.com/gr.svg",
    "description": "Greece ranks 85th because strong family ties and social support networks remain important sources of well-being. Personal relationships continue to provide stability during difficult periods.\n\nThe country benefits from high life expectancy, cultural richness, and established healthcare systems. These strengths contribute positively to life satisfaction.\n\nThe effects of past economic crises continue to influence confidence and future expectations. Economic concerns still affect overall happiness.\n\nIts ranking reflects resilience supported by strong social bonds and gradual recovery."
  },
  {
    "country_name": "Albania",
    "rank": 86,
    "happiness_score": 5.662,
    "flag_url": "https://flagcdn.com/al.svg",
    "description": "Albania ranks 86th because close family relationships and community support remain central to daily life. These social connections contribute strongly to well-being.\n\nEconomic development has improved opportunities and living standards for many citizens in recent years. Progress has supported higher life evaluations.\n\nIncome levels and public service quality still trail many higher-ranked European countries. These factors continue to shape happiness outcomes.\n\nIts ranking reflects the importance of social support alongside ongoing economic development."
  },
  {
    "country_name": "Indonesia",
    "rank": 87,
    "happiness_score": 5.617,
    "flag_url": "https://flagcdn.com/id.svg",
    "description": "Indonesia ranks 87th because strong community bonds and family support play a significant role in reported well-being. Social cohesion remains an important national strength.\n\nEconomic growth has expanded opportunities, infrastructure, and access to services across much of the country. These developments contribute positively to life satisfaction.\n\nLarge regional differences continue to influence quality of life and access to resources. Not all communities benefit equally from development.\n\nIts ranking reflects the positive impact of social connections together with the challenges of a large and diverse nation."
  },
  {
    "country_name": "Tajikistan",
    "rank": 88,
    "happiness_score": 5.591,
    "flag_url": "https://flagcdn.com/tj.svg",
    "description": "Tajikistan ranks 88th because family relationships and social support remain important foundations of well-being. Many citizens rely on close community networks for assistance and encouragement.\n\nStrong social cohesion contributes positively to life evaluations across the country. Personal relationships remain a major source of resilience.\n\nEconomic opportunities remain more limited than in many higher-ranked nations. These constraints continue to influence happiness levels.\n\nIts ranking highlights the important role of social support within the World Happiness Report framework."
  },
  {
    "country_name": "Armenia",
    "rank": 89,
    "happiness_score": 5.584,
    "flag_url": "https://flagcdn.com/am.svg",
    "description": "Armenia ranks 89th because strong family connections and cultural ties contribute positively to life satisfaction. Community relationships remain an important source of support.\n\nEconomic and social development have improved opportunities and living conditions for many citizens. These gains help strengthen overall well-being.\n\nRegional tensions and economic limitations continue to influence perceptions of stability and the future. Such challenges affect life evaluations.\n\nIts ranking reflects a combination of resilience, social support, and gradual progress."
  },
  {
    "country_name": "Hong Kong SAR of China",
    "rank": 90,
    "happiness_score": 5.569,
    "flag_url": "https://flagcdn.com/hk.svg",
    "description": "Hong Kong SAR of China ranks 90th because high levels of economic development and modern infrastructure support quality of life for many residents. The territory benefits from strong global connectivity and opportunity.\n\nCitizens enjoy high life expectancy and access to advanced public services. These strengths contribute positively to well-being.\n\nHousing affordability and everyday life pressures continue to influence overall life satisfaction. These concerns moderate happiness outcomes.\n\nIts ranking reflects the interaction of prosperity, opportunity, and the challenges associated with a highly competitive environment."
  },
  {
    "country_name": "Georgia",
    "rank": 91,
    "happiness_score": 5.517,
    "flag_url": "https://flagcdn.com/ge.svg",
    "description": "Georgia ranks 91st because strong hospitality traditions and close family ties contribute positively to life satisfaction. Social relationships remain deeply valued.\n\nCitizens often report receiving support from relatives and local communities during difficult periods.\n\nEconomic development continues, but opportunities remain uneven across different regions.\n\nIts ranking reflects the contribution of social support and resilience to well-being."
  },
  {
    "country_name": "Lao PDR",
    "rank": 92,
    "happiness_score": 5.515,
    "flag_url": "https://flagcdn.com/la.svg",
    "description": "Lao PDR ranks 92nd because community-oriented lifestyles contribute to a sense of belonging and social stability. Personal relationships remain important sources of happiness.\n\nThe country has experienced gradual improvements in infrastructure and economic development.\n\nAccess to services and opportunities remains more limited than in many higher-ranked nations.\n\nIts ranking reflects the influence of social cohesion and gradual progress."
  },
  {
    "country_name": "Mozambique",
    "rank": 93,
    "happiness_score": 5.336,
    "flag_url": "https://flagcdn.com/mz.svg",
    "description": "Mozambique ranks 93rd because strong local communities provide support in the face of economic and environmental challenges. Social resilience remains an important strength.\n\nMany citizens rely on family networks and community cooperation in everyday life.\n\nDevelopment challenges continue to affect living standards and opportunities.\n\nIts ranking reflects resilience and social support amid difficult conditions."
  },
  {
    "country_name": "Turkey",
    "rank": 94,
    "happiness_score": 5.300,
    "flag_url": "https://flagcdn.com/tr.svg",
    "description": "Turkey ranks 94th because a rich cultural identity and strong family structures contribute positively to well-being. Social relationships remain deeply rooted in society.\n\nThe country benefits from extensive infrastructure, healthcare services, and economic activity.\n\nEconomic volatility has influenced public perceptions of stability and future prospects.\n\nIts ranking reflects both social strengths and economic challenges."
  },
  {
    "country_name": "Iraq",
    "rank": 95,
    "happiness_score": 5.212,
    "flag_url": "https://flagcdn.com/iq.svg",
    "description": "Iraq ranks 95th because citizens continue to demonstrate resilience despite decades of conflict and uncertainty. Family and community support remain essential sources of strength.\n\nThe country possesses significant natural resources and long-term development potential.\n\nSecurity concerns and institutional challenges continue to affect daily life and well-being.\n\nIts ranking reflects the persistence of resilience and social support under difficult circumstances."
  },
  {
    "country_name": "Gabon",
    "rank": 96,
    "happiness_score": 5.167,
    "flag_url": "https://flagcdn.com/ga.svg",
    "description": "Gabon ranks 96th because its natural resource wealth provides a foundation for economic development and public investment. These resources contribute to living standards and national opportunities.\n\nThe country benefits from relatively high income levels compared with several neighboring nations.\n\nEconomic gains have not always translated evenly across the population, creating differences in quality of life.\n\nIts ranking reflects the potential of natural wealth alongside the challenge of ensuring broad-based well-being."
  },
  {
    "country_name": "Iran",
    "rank": 97,
    "happiness_score": 5.151,
    "flag_url": "https://flagcdn.com/ir.svg",
    "description": "Iran ranks 97th because strong family structures continue to provide support and stability for many citizens. Social relationships remain an important source of resilience.\n\nThe country benefits from a long tradition of education, culture, and scientific achievement.\n\nEconomic restrictions and uncertainty continue to influence public outlook and life evaluations.\n\nIts ranking reflects the interaction between social strengths and economic pressures."
  },
  {
    "country_name": "Côte d'Ivoire",
    "rank": 98,
    "happiness_score": 5.148,
    "flag_url": "https://flagcdn.com/ci.svg",
    "description": "Côte d'Ivoire(also called as Ivory Coast) ranks 98th because sustained economic growth has improved opportunities and living standards in recent years. Development has contributed positively to well-being.\n\nThe country has strengthened its economic position within West Africa through investment and expansion.\n\nBenefits from growth are not distributed equally across all communities.\n\nIts ranking reflects the progress achieved through development while highlighting the importance of inclusive prosperity."
  },
  {
    "country_name": "Nepal",
    "rank": 99,
    "happiness_score": 5.147,
    "flag_url": "https://flagcdn.com/np.svg",
    "description": "Nepal ranks 99th because strong social and cultural traditions provide many citizens with a sense of purpose and belonging. Community life remains an important part of daily experience.\n\nFamily support networks help people navigate economic and environmental challenges.\n\nGeographic constraints and limited economic opportunities continue to affect living standards.\n\nIts ranking reflects the contribution of social cohesion and cultural identity to happiness."
  },
  {
    "country_name": "Cameroon",
    "rank": 100,
    "happiness_score": 5.083,
    "flag_url": "https://flagcdn.com/cm.svg",
    "description": "Cameroon ranks 100th because diverse communities and strong interpersonal relationships contribute positively to well-being. Social support remains a valuable resource for many households.\n\nThe country benefits from significant agricultural and natural resources.\n\nInfrastructure and development challenges continue to influence quality of life.\n\nIts ranking reflects a combination of social resilience and ongoing development needs."
  },
  {
    "country_name": "South Africa",
    "rank": 101,
    "happiness_score": 5.009,
    "flag_url": "https://flagcdn.com/za.svg",
    "description": "South Africa ranks 101st because vibrant communities and strong social identities continue to support well-being despite significant challenges. Many citizens find strength through family and local networks.\n\nThe country possesses advanced institutions and economic capabilities compared with many nations in the region.\n\nHigh inequality and unemployment remain major barriers to higher life satisfaction.\n\nIts ranking reflects the contrast between national potential and persistent social challenges."
  },
  {
    "country_name": "Azerbaijan",
    "rank": 102,
    "happiness_score": 4.993,
    "flag_url": "https://flagcdn.com/az.svg",
    "description": "Azerbaijan ranks 102nd because economic development supported by energy resources has improved living conditions over time. Citizens have benefited from infrastructure and modernization projects.\n\nThe country has invested heavily in transportation, urban development, and public services.\n\nEconomic diversification remains an important long-term objective.\n\nIts ranking reflects the influence of development and modernization on well-being."
  },
  {
    "country_name": "Niger",
    "rank": 103,
    "happiness_score": 4.940,
    "flag_url": "https://flagcdn.com/ne.svg",
    "description": "Niger ranks 103rd because community cooperation remains an essential part of daily life. Social support helps many citizens manage difficult economic conditions.\n\nLocal relationships often provide assistance where formal systems are limited.\n\nPoverty and development challenges continue to affect opportunities and quality of life.\n\nIts ranking reflects the strength of community resilience under demanding circumstances."
  },
  {
    "country_name": "Pakistan",
    "rank": 104,
    "happiness_score": 4.868,
    "flag_url": "https://flagcdn.com/pk.svg",
    "description": "Pakistan ranks 104th because family bonds remain one of the strongest foundations of social life. Many citizens rely heavily on relatives for support and guidance.\n\nThe country's large and youthful population creates both opportunities and energy for future growth.\n\nEconomic pressures and infrastructure challenges continue to influence overall well-being.\n\nIts ranking reflects the importance of family support alongside ongoing development needs."
  },
  {
    "country_name": "Tunisia",
    "rank": 105,
    "happiness_score": 4.798,
    "flag_url": "https://flagcdn.com/tn.svg",
    "description": "Tunisia ranks 105th because education and human development have historically contributed positively to quality of life. Citizens benefit from relatively strong social indicators within the region.\n\nThe country maintains important strengths in literacy, healthcare, and public services.\n\nEconomic uncertainty and employment concerns continue to affect life satisfaction.\n\nIts ranking reflects the interaction between social development and economic challenges."
  },
  {
    "country_name": "Nigeria",
    "rank": 106,
    "happiness_score": 4.788,
    "flag_url": "https://flagcdn.com/ng.svg",
    "description": "Nigeria ranks 106th because entrepreneurial energy and social vitality remain important features of society. Citizens often demonstrate optimism despite significant challenges.\n\nThe country benefits from a large population, cultural diversity, and economic potential.\n\nInfrastructure deficits and inequality continue to influence well-being outcomes.\n\nIts ranking reflects both the opportunities and obstacles associated with rapid growth."
  },
  {
    "country_name": "Senegal",
    "rank": 107,
    "happiness_score": 4.787,
    "flag_url": "https://flagcdn.com/sn.svg",
    "description": "Senegal ranks 107th because social harmony and community engagement remain important contributors to daily well-being. Many citizens report strong interpersonal support networks.\n\nThe country has developed a reputation for relative political stability within the region.\n\nEconomic opportunities remain more limited than in higher-ranked countries.\n\nIts ranking reflects the contribution of social cohesion and stability to happiness."
  },
  {
    "country_name": "Namibia",
    "rank": 108,
    "happiness_score": 4.781,
    "flag_url": "https://flagcdn.com/na.svg",
    "description": "Namibia ranks 108th because political stability and natural beauty contribute positively to quality of life. Citizens benefit from peaceful institutions and a strong national identity.\n\nThe country performs relatively well in governance compared with many regional peers.\n\nIncome inequality remains one of the major challenges affecting overall well-being.\n\nIts ranking reflects the balance between institutional stability and social disparities."
  },
  {
    "country_name": "State of Palestine",
    "rank": 109,
    "happiness_score": 4.694,
    "flag_url": "https://flagcdn.com/ps.svg",
    "description": "The State of Palestine ranks 109th because strong community solidarity helps many citizens maintain resilience during difficult circumstances. Social support remains a critical source of strength.\n\nFamily networks often provide assistance, stability, and emotional support.\n\nRestrictions, uncertainty, and economic limitations continue to affect daily life.\n\nIts ranking reflects the remarkable role of resilience and social cohesion under challenging conditions."
  },
  {
    "country_name": "Kenya",
    "rank": 110,
    "happiness_score": 4.674,
    "flag_url": "https://flagcdn.com/ke.svg",
    "description": "Kenya ranks 110th because innovation, entrepreneurship, and community support contribute positively to life satisfaction. Citizens often demonstrate adaptability in the face of change.\n\nThe country has become a regional leader in technology and digital financial services.\n\nEconomic inequality and access to services remain important concerns.\n\nIts ranking reflects a combination of innovation, resilience, and continuing development challenges."
  },
  {
    "country_name": "Ukraine",
    "rank": 111,
    "happiness_score": 4.658,
    "flag_url": "https://flagcdn.com/ua.svg",
    "description": "Ukraine ranks 111th because social solidarity and national resilience continue to support well-being during extraordinary circumstances. Many citizens rely heavily on family, friends, and local communities.\n\nStrong social support networks help people manage uncertainty and disruption.\n\nOngoing conflict has significantly affected security, economic conditions, and daily life.\n\nIts ranking reflects the remarkable endurance of social cohesion despite severe national challenges."
  },
  {
    "country_name": "Morocco",
    "rank": 112,
    "happiness_score": 4.646,
    "flag_url": "https://flagcdn.com/ma.svg",
    "description": "Morocco ranks 112th because strong cultural identity and family connections contribute positively to life satisfaction. Social relationships remain central to everyday life.\n\nThe country has invested in infrastructure, renewable energy, and economic modernization.\n\nEmployment opportunities and income growth remain important concerns for many citizens.\n\nIts ranking reflects the interaction between social strengths and development challenges."
  },
  {
    "country_name": "Guinea",
    "rank": 113,
    "happiness_score": 4.609,
    "flag_url": "https://flagcdn.com/gn.svg",
    "description": "Guinea ranks 113th because community support remains an important source of resilience. Many citizens depend on personal networks for assistance and stability.\n\nThe country possesses significant natural resources that offer long-term development potential.\n\nInfrastructure limitations and economic constraints continue to affect quality of life.\n\nIts ranking reflects strong social foundations alongside continuing development needs."
  },
  {
    "country_name": "Mali",
    "rank": 114,
    "happiness_score": 4.588,
    "flag_url": "https://flagcdn.com/ml.svg",
    "description": "Mali ranks 114th because strong communal traditions help maintain social cohesion even during difficult periods. Community relationships remain highly valued.\n\nCitizens often rely on extended family networks and local support systems.\n\nSecurity concerns and economic challenges continue to influence life evaluations.\n\nIts ranking reflects the persistence of social resilience amid ongoing instability."
  },
  {
    "country_name": "Ghana",
    "rank": 115,
    "happiness_score": 4.554,
    "flag_url": "https://flagcdn.com/gh.svg",
    "description": "Ghana ranks 115th because political stability and social optimism contribute positively to well-being. The country is often viewed as one of the more stable democracies in the region.\n\nCitizens benefit from active communities and improving economic opportunities.\n\nIncome levels and public service access still lag behind many higher-ranked countries.\n\nIts ranking reflects a combination of stability, optimism, and gradual development."
  },
  {
    "country_name": "India",
    "rank": 116,
    "happiness_score": 4.536,
    "flag_url": "https://flagcdn.com/in.svg",
    "description": "India ranks 116th because strong family networks continue to provide support across generations. Social relationships remain a major source of resilience for many citizens.\n\nThe country has achieved significant economic growth, technological advancement, and infrastructure development over recent decades.\n\nLarge differences in income, opportunity, and access to services influence overall life satisfaction.\n\nIts ranking reflects the coexistence of rapid progress, deep social support, and persistent development challenges."
  },
  {
    "country_name": "Somalia",
    "rank": 117,
    "happiness_score": 4.508,
    "flag_url": "https://flagcdn.com/so.svg",
    "description": "Somalia ranks 117th because family and clan networks remain essential sources of support and survival. Social ties play a critical role in daily life.\n\nCitizens often depend on informal community systems where formal institutions are limited.\n\nSecurity and economic challenges continue to affect opportunities and well-being.\n\nIts ranking reflects the strength of social resilience under difficult circumstances."
  },
  {
    "country_name": "Uganda",
    "rank": 118,
    "happiness_score": 4.491,
    "flag_url": "https://flagcdn.com/ug.svg",
    "description": "Uganda ranks 118th because strong interpersonal relationships contribute positively to life satisfaction. Community support remains an important part of daily life.\n\nThe country benefits from a young population and growing entrepreneurial activity.\n\nPoverty and infrastructure gaps continue to limit opportunities for many households.\n\nIts ranking reflects the balance between social strengths and economic constraints."
  },
  {
    "country_name": "Jordan",
    "rank": 119,
    "happiness_score": 4.478,
    "flag_url": "https://flagcdn.com/jo.svg",
    "description": "Jordan ranks 119th because social stability and strong family structures provide important foundations for well-being. Citizens often place high value on family and community relationships.\n\nThe country has maintained relative stability in a complex regional environment.\n\nResource limitations and economic pressures continue to influence life evaluations.\n\nIts ranking reflects resilience and stability despite structural challenges."
  },
  {
    "country_name": "Mauritania",
    "rank": 120,
    "happiness_score": 4.473,
    "flag_url": "https://flagcdn.com/mr.svg",
    "description": "Mauritania ranks 120th because strong cultural traditions and community networks help support social cohesion. Many citizens rely on family relationships for assistance and guidance.\n\nThe country possesses natural resources that provide opportunities for future development.\n\nEconomic diversification and public service access remain ongoing priorities.\n\nIts ranking reflects social resilience alongside development challenges."
  },
  {
    "country_name": "Cambodia",
    "rank": 121,
    "happiness_score": 4.462,
    "flag_url": "https://flagcdn.com/kh.svg",
    "description": "Cambodia ranks 121st because sustained economic growth has improved living standards for many citizens. Development has expanded opportunities across the country.\n\nThe nation has made significant progress in poverty reduction and infrastructure improvement.\n\nIncome levels and access to services remain below those of many higher-ranked countries.\n\nIts ranking reflects the positive impact of development while highlighting remaining gaps."
  },
  {
    "country_name": "Congo",
    "rank": 122,
    "happiness_score": 4.456,
    "flag_url": "https://flagcdn.com/cg.svg",
    "description": "Congo ranks 122nd because social support remains an important source of stability for many households. Community and family relationships help people navigate uncertainty.\n\nNatural resources provide significant economic potential for future growth.\n\nEconomic dependence on commodity sectors can create fluctuations in living conditions.\n\nIts ranking reflects both resource potential and development challenges."
  },
  {
    "country_name": "Burkina Faso",
    "rank": 123,
    "happiness_score": 4.455,
    "flag_url": "https://flagcdn.com/bf.svg",
    "description": "Burkina Faso ranks 123rd because community cooperation remains a defining feature of social life. Citizens frequently depend on local networks for support.\n\nStrong interpersonal relationships help strengthen resilience during difficult periods.\n\nSecurity challenges and limited resources continue to affect quality of life.\n\nIts ranking reflects the enduring role of community support under challenging conditions."
  },
  {
    "country_name": "Benin",
    "rank": 124,
    "happiness_score": 4.393,
    "flag_url": "https://flagcdn.com/bj.svg",
    "description": "Benin ranks 124th because social cohesion and community engagement contribute positively to well-being. Many citizens report strong local connections.\n\nThe country has maintained relative political stability compared with some regional peers.\n\nEconomic opportunities remain limited for a large portion of the population.\n\nIts ranking reflects the contribution of social stability and community support to happiness."
  },
  {
    "country_name": "Chad",
    "rank": 125,
    "happiness_score": 4.385,
    "flag_url": "https://flagcdn.com/td.svg",
    "description": "Chad ranks 125th because family and community networks remain vital sources of support. Social relationships help many citizens cope with difficult living conditions.\n\nCitizens demonstrate resilience in the face of environmental and economic pressures.\n\nLimited infrastructure and development challenges continue to affect daily life.\n\nIts ranking reflects strong social resilience despite substantial structural obstacles."
  },
  {
    "country_name": "Lesotho",
    "rank": 126,
    "happiness_score": 4.375,
    "flag_url": "https://flagcdn.com/ls.svg",
    "description": "Lesotho ranks 126th because strong family and community relationships continue to provide support in everyday life. Social networks remain important sources of resilience.\n\nCitizens often depend on close personal connections during periods of economic difficulty.\n\nHealth and employment challenges continue to influence overall well-being.\n\nIts ranking reflects the strength of social support alongside significant development obstacles."
  },
  {
    "country_name": "Bangladesh",
    "rank": 127,
    "happiness_score": 4.319,
    "flag_url": "https://flagcdn.com/bd.svg",
    "description": "Bangladesh ranks 127th because rapid economic growth has improved living standards for millions of people. The country has made notable progress in development over recent decades.\n\nAdvances in education, healthcare, and poverty reduction have contributed positively to quality of life.\n\nPopulation density and environmental pressures continue to present major challenges.\n\nIts ranking reflects impressive development gains alongside ongoing structural constraints."
  },
  {
    "country_name": "Gambia",
    "rank": 128,
    "happiness_score": 4.306,
    "flag_url": "https://flagcdn.com/gm.svg",
    "description": "Gambia ranks 128th because strong social relationships remain an important contributor to daily well-being. Community life continues to play a central role in society.\n\nMany citizens rely on family and local support networks for assistance and encouragement.\n\nEconomic opportunities remain limited compared with many higher-ranked countries.\n\nIts ranking reflects the value of social cohesion despite economic constraints."
  },
  {
    "country_name": "Myanmar",
    "rank": 129,
    "happiness_score": 4.287,
    "flag_url": "https://flagcdn.com/mm.svg",
    "description": "Myanmar ranks 129th because family support remains a key source of stability during periods of uncertainty. Social ties continue to provide resilience for many citizens.\n\nCommunity relationships often help people navigate difficult economic and social conditions.\n\nPolitical instability has significantly affected well-being and future expectations.\n\nIts ranking reflects the persistence of social support under challenging circumstances."
  },
  {
    "country_name": "Liberia",
    "rank": 130,
    "happiness_score": 4.280,
    "flag_url": "https://flagcdn.com/lr.svg",
    "description": "Liberia ranks 130th because strong community networks continue to support citizens through economic hardship. Social connections remain a valuable source of resilience.\n\nThe country has made progress in rebuilding institutions and improving public services.\n\nDevelopment challenges continue to affect opportunities and living standards.\n\nIts ranking reflects gradual recovery combined with ongoing structural difficulties."
  },
  {
    "country_name": "Togo",
    "rank": 131,
    "happiness_score": 4.277,
    "flag_url": "https://flagcdn.com/tg.svg",
    "description": "Togo ranks 131st because family and community support remain important pillars of daily life. Citizens frequently rely on close personal networks.\n\nSocial relationships help strengthen resilience during economic challenges.\n\nLimited economic opportunities continue to influence overall life satisfaction.\n\nIts ranking reflects the importance of social support in maintaining well-being."
  },
  {
    "country_name": "Madagascar",
    "rank": 132,
    "happiness_score": 4.174,
    "flag_url": "https://flagcdn.com/mg.svg",
    "description": "Madagascar ranks 132nd because strong local communities help provide stability and support. Social relationships remain important sources of well-being.\n\nThe country's unique natural environment and cultural identity contribute positively to quality of life.\n\nPoverty and infrastructure limitations continue to affect many households.\n\nIts ranking reflects strong community resilience alongside persistent development challenges."
  },
  {
    "country_name": "Zambia",
    "rank": 133,
    "happiness_score": 4.106,
    "flag_url": "https://flagcdn.com/zm.svg",
    "description": "Zambia ranks 133rd because community cooperation and family support continue to strengthen resilience. Social ties remain important in everyday life.\n\nThe country benefits from significant natural resources and economic potential.\n\nEconomic instability and public service challenges continue to affect living conditions.\n\nIts ranking reflects both social strengths and development pressures."
  },
  {
    "country_name": "Sri Lanka",
    "rank": 134,
    "happiness_score": 4.013,
    "flag_url": "https://flagcdn.com/lk.svg",
    "description": "Sri Lanka ranks 134th because strong family relationships and cultural traditions contribute positively to well-being. Social support remains an important national strength.\n\nThe country performs relatively well in education and health indicators compared with nations at similar income levels.\n\nRecent economic difficulties have significantly affected life satisfaction.\n\nIts ranking reflects the tension between strong social foundations and economic pressures."
  },
  {
    "country_name": "Ethiopia",
    "rank": 135,
    "happiness_score": 3.985,
    "flag_url": "https://flagcdn.com/et.svg",
    "description": "Ethiopia ranks 135th because strong cultural identity and community relationships continue to support resilience. Citizens often rely on family and local networks.\n\nThe country has experienced periods of rapid economic growth and infrastructure development.\n\nConflict and economic challenges have affected well-being in recent years.\n\nIts ranking reflects both development progress and significant ongoing difficulties."
  },
  {
    "country_name": "Comoros",
    "rank": 136,
    "happiness_score": 3.925,
    "flag_url": "https://flagcdn.com/km.svg",
    "description": "Comoros ranks 136th because close family ties remain central to daily life and well-being. Social support provides stability for many households.\n\nStrong cultural traditions contribute to a sense of identity and belonging.\n\nLimited economic opportunities and geographic isolation continue to affect quality of life.\n\nIts ranking reflects social cohesion alongside structural constraints."
  },
  {
    "country_name": "Eswatini",
    "rank": 137,
    "happiness_score": 3.909,
    "flag_url": "https://flagcdn.com/sz.svg",
    "description": "Eswatini ranks 137th because community relationships and cultural continuity remain important sources of support. Citizens often rely on strong social networks.\n\nThe country maintains a distinct cultural identity that shapes social life.\n\nHealth and economic challenges continue to affect overall well-being.\n\nIts ranking reflects cultural strength amid persistent social and economic difficulties."
  },
  {
    "country_name": "Tanzania",
    "rank": 138,
    "happiness_score": 3.902,
    "flag_url": "https://flagcdn.com/tz.svg",
    "description": "Tanzania ranks 138th because social harmony and community engagement contribute positively to daily life. Many citizens value strong interpersonal relationships.\n\nThe country has achieved progress in development and public service access.\n\nPoverty and infrastructure gaps continue to limit opportunities for many people.\n\nIts ranking reflects gradual development supported by strong social foundations."
  },
  {
    "country_name": "Egypt",
    "rank": 139,
    "happiness_score": 3.862,
    "flag_url": "https://flagcdn.com/eg.svg",
    "description": "Egypt ranks 139th because deep cultural heritage and strong family structures continue to shape social life. Personal relationships remain important contributors to well-being.\n\nThe country benefits from significant human capital, infrastructure, and regional influence.\n\nEconomic pressures and population-related challenges affect life satisfaction.\n\nIts ranking reflects the contrast between national strengths and everyday economic concerns."
  },
  {
    "country_name": "Democratic Republic of the Congo",
    "rank": 140,
    "happiness_score": 3.761,
    "flag_url": "https://flagcdn.com/cd.svg",
    "description": "The Democratic Republic of the Congo ranks 140th because community resilience remains essential in the face of difficult circumstances. Social support continues to help many citizens cope with challenges.\n\nThe country possesses vast natural resources and significant long-term potential.\n\nConflict, poverty, and infrastructure limitations continue to affect well-being.\n\nIts ranking reflects strong resilience despite substantial structural obstacles."
  },
  {
    "country_name": "Lebanon",
    "rank": 141,
    "happiness_score": 3.723,
    "flag_url": "https://flagcdn.com/lb.svg",
    "description": "Lebanon ranks 141st because family and community relationships continue to provide support during periods of uncertainty. Social networks remain critical to daily life.\n\nThe country has a long tradition of education, entrepreneurship, and cultural influence.\n\nEconomic and financial crises have significantly affected public confidence and quality of life.\n\nIts ranking reflects the impact of prolonged economic hardship despite strong social ties."
  },
  {
    "country_name": "Yemen",
    "rank": 142,
    "happiness_score": 3.532,
    "flag_url": "https://flagcdn.com/ye.svg",
    "description": "Yemen ranks 142nd because prolonged conflict has severely affected living conditions and opportunities. These circumstances continue to shape daily life for millions of people.\n\nFamily and community support remain important sources of resilience and survival.\n\nHumanitarian challenges and economic disruption have reduced overall life satisfaction.\n\nIts ranking reflects the profound impact of conflict despite enduring social support networks."
  },
  {
    "country_name": "Botswana",
    "rank": 143,
    "happiness_score": 3.464,
    "flag_url": "https://flagcdn.com/bw.svg",
    "description": "Botswana ranks 143rd because economic development has not fully translated into higher life satisfaction for all citizens. Social and economic disparities continue to influence well-being.\n\nThe country is recognized for political stability and relatively strong institutions.\n\nUnemployment and inequality remain important challenges.\n\nIts ranking reflects the gap between development achievements and lived experience."
  },
  {
    "country_name": "Zimbabwe",
    "rank": 144,
    "happiness_score": 3.346,
    "flag_url": "https://flagcdn.com/zw.svg",
    "description": "Zimbabwe ranks 144th because prolonged economic instability has affected quality of life and future expectations. Financial uncertainty continues to influence daily well-being.\n\nFamily support networks remain important sources of strength and resilience.\n\nEconomic pressures have limited opportunities for many households.\n\nIts ranking reflects the lasting impact of economic hardship despite strong social ties."
  },
  {
    "country_name": "Malawi",
    "rank": 145,
    "happiness_score": 3.284,
    "flag_url": "https://flagcdn.com/mw.svg",
    "description": "Malawi ranks 145th because many citizens face economic and development challenges that affect everyday life. Limited resources influence overall well-being.\n\nCommunities often demonstrate strong cooperation and mutual support.\n\nAccess to healthcare, infrastructure, and economic opportunities remains limited.\n\nIts ranking reflects resilience and community spirit amid significant constraints."
  },
  {
    "country_name": "Sierra Leone",
    "rank": 146,
    "happiness_score": 3.251,
    "flag_url": "https://flagcdn.com/sl.svg",
    "description": "Sierra Leone ranks 146th because development challenges continue to affect living standards and life satisfaction. Economic opportunities remain limited for many citizens.\n\nStrong community relationships provide support during difficult circumstances.\n\nHealthcare, infrastructure, and income levels remain below global averages.\n\nIts ranking reflects ongoing development needs despite strong social resilience."
  },
  {
    "country_name": "Afghanistan",
    "rank": 147,
    "happiness_score": 1.446,
    "flag_url": "https://flagcdn.com/af.svg",
    "description": "Afghanistan ranks 147th because citizens face some of the most severe economic, social, and humanitarian challenges in the world. These conditions have profoundly affected daily life and well-being.\n\nAccess to opportunities, services, and stability remains extremely limited for many people.\n\nYears of conflict and uncertainty have reduced life evaluations to the lowest level recorded in the report.\n\nIts ranking reflects the extraordinary hardships facing the population and explains why Afghanistan remains the least happy country in the World Happiness Report."
  },
  {
    "country_name": "Andorra",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/ad.svg",
    "description": "Andorra was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report evaluates countries using factors such as social support, GDP per capita, healthy life expectancy, freedom to make life choices, generosity, and perceptions of corruption.\n\nAs a small European state, Andorra was not represented in the report's ranked dataset for 2026.\n\nIts absence from the ranking reflects data availability rather than a measured level of happiness."
  },
  {
    "country_name": "Angola",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/ao.svg",
    "description": "Angola was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report relies on internationally comparable survey responses to measure life evaluations and happiness outcomes.\n\nWithout the required data, Angola's performance across the report's core indicators cannot be directly compared with ranked countries.\n\nIts absence from the ranking reflects data limitations rather than an assessed happiness outcome."
  },
  {
    "country_name": "Antigua and Barbuda",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/ag.svg",
    "description": "Antigua and Barbuda was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report uses standardized survey responses and supporting indicators to calculate country rankings.\n\nWithout adequate data collection, the country could not be evaluated using the same methodology as ranked nations.\n\nIts absence from the ranking reflects data availability rather than a measured level of well-being."
  },
  {
    "country_name": "Bahamas",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/bs.svg",
    "description": "The Bahamas was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report compares countries using internationally collected life-evaluation surveys and several supporting factors.\n\nWithout a complete dataset, the country's happiness performance cannot be measured under the report's framework.\n\nIts absence from the ranking reflects insufficient data rather than a reported happiness level."
  },
  {
    "country_name": "Barbados",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/bb.svg",
    "description": "Barbados was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report depends on survey-based life evaluations to produce country rankings.\n\nWithout the required survey coverage, Barbados could not be assessed alongside ranked countries.\n\nIts absence from the ranking reflects data availability rather than an evaluated level of happiness."
  },
  {
    "country_name": "Belarus",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/by.svg",
    "description": "Belarus was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report requires consistent and internationally comparable survey responses to estimate national happiness levels.\n\nWithout those data requirements being met, Belarus could not be included in the ranked dataset.\n\nIts absence from the ranking reflects a lack of available data rather than a measured happiness outcome."
  },
  {
    "country_name": "Bhutan",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/bt.svg",
    "description": "Bhutan was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report evaluates well-being using factors such as social support, income, health, freedom, generosity, and perceptions of corruption.\n\nBhutan is internationally known for promoting the concept of Gross National Happiness, but the report did not publish an official ranking for the country in 2026.\n\nIts absence from the ranking reflects data availability rather than a measured level of happiness."
  },
  {
    "country_name": "Brunei",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/bn.svg",
    "description": "Brunei was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report relies on life-evaluation surveys and supporting indicators to compare countries.\n\nWithout adequate survey participation, Brunei could not be assessed using the report's methodology.\n\nIts absence from the ranking reflects insufficient data rather than a measured happiness score."
  },
  {
    "country_name": "Burundi",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/bi.svg",
    "description": "Burundi was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report measures life evaluations using internationally comparable survey responses.\n\nWithout the necessary data, the country could not be placed within the report's ranking framework.\n\nIts absence from the ranking reflects data limitations rather than an official happiness assessment."
  },
  {
    "country_name": "Cabo Verde",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/cv.svg",
    "description": "Cabo Verde was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report uses survey-based life evaluations together with key well-being indicators to produce rankings.\n\nWithout a complete dataset, Cabo Verde could not be directly compared with ranked countries.\n\nIts absence from the ranking reflects data availability rather than a measured level of happiness."
  },
  {
    "country_name": "Central African Republic",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/cf.svg",
    "description": "The Central African Republic was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report relies on internationally comparable survey responses to evaluate life satisfaction and well-being.\n\nWithout the required data collection, the country could not be assessed using the report's methodology.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Cuba",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/cu.svg",
    "description": "Cuba was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report evaluates countries through survey-based life evaluations and supporting well-being indicators.\n\nWithout adequate survey coverage, Cuba could not be compared with ranked nations.\n\nIts absence from the ranking reflects insufficient data rather than an evaluated level of happiness."
  },
  {
    "country_name": "Djibouti",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/dj.svg",
    "description": "Djibouti was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report uses standardized survey responses to estimate national life evaluations.\n\nWithout the necessary data, the country's well-being indicators could not be assessed within the ranking framework.\n\nIts absence from the ranking reflects data limitations rather than a measured happiness level."
  },
  {
    "country_name": "Dominica",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/dm.svg",
    "description": "Dominica was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report depends on internationally collected survey data to compare countries.\n\nWithout adequate participation and data coverage, Dominica could not be ranked.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Equatorial Guinea",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/gq.svg",
    "description": "Equatorial Guinea was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report requires consistent survey-based life evaluations and supporting indicators.\n\nWithout the required dataset, the country could not be evaluated using the same standards as ranked nations.\n\nIts absence from the ranking reflects data availability rather than a reported level of happiness."
  },
  {
    "country_name": "Eritrea",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/er.svg",
    "description": "Eritrea was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report depends on internationally comparable survey responses to estimate well-being.\n\nWithout adequate survey data, Eritrea could not be assessed under the report's methodology.\n\nIts absence from the ranking reflects data limitations rather than an official happiness assessment."
  },
  {
    "country_name": "Fiji",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/fj.svg",
    "description": "Fiji was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report measures life satisfaction using survey responses collected across participating countries.\n\nWithout the required data, Fiji could not be directly compared with ranked nations.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Grenada",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/gd.svg",
    "description": "Grenada was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report relies on standardized life-evaluation surveys to create rankings.\n\nWithout adequate survey coverage, Grenada could not be evaluated using the report's framework.\n\nIts absence from the ranking reflects insufficient data rather than a measured level of well-being."
  },
  {
    "country_name": "Guinea-Bissau",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/gw.svg",
    "description": "Guinea-Bissau(also called Portuguese Guinea) was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report compares countries through survey-based life evaluations and supporting indicators.\n\nWithout a complete dataset, the country could not be assessed alongside ranked nations.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Guyana",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/gy.svg",
    "description": "Guyana was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report uses internationally comparable survey responses to measure life satisfaction.\n\nWithout adequate data collection, Guyana could not be included in the ranked dataset.\n\nIts absence from the ranking reflects data limitations rather than a measured level of happiness."
  },
  {
    "country_name": "Haiti",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/ht.svg",
    "description": "Haiti was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report requires reliable survey responses to estimate national well-being and life evaluations.\n\nWithout the required dataset, Haiti could not be evaluated under the report's methodology.\n\nIts absence from the ranking reflects data availability rather than an assessed happiness outcome."
  },
  {
    "country_name": "Kiribati",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/ki.svg",
    "description": "Kiribati was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report relies on internationally collected survey responses and supporting indicators.\n\nWithout adequate survey coverage, Kiribati could not be compared with ranked countries.\n\nIts absence from the ranking reflects data limitations rather than a measured level of well-being."
  },
  {
    "country_name": "Liechtenstein",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/li.svg",
    "description": "Liechtenstein was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report measures happiness through survey-based life evaluations collected across participating countries.\n\nWithout the required data, Liechtenstein could not be assessed using the same methodology as ranked nations.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Maldives",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/mv.svg",
    "description": "The Maldives was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report depends on standardized survey responses to estimate national well-being.\n\nWithout adequate survey participation, the country could not be included in the ranking.\n\nIts absence from the ranking reflects insufficient data rather than a measured level of happiness."
  },
  {
    "country_name": "Marshall Islands",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/mh.svg",
    "description": "The Marshall Islands was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report compares countries using life-evaluation surveys and supporting well-being indicators.\n\nWithout the required data collection, the country could not be assessed alongside ranked nations.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Micronesia",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/fm.svg",
    "description": "Micronesia was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report relies on internationally comparable survey responses to evaluate life satisfaction and well-being.\n\nWithout adequate survey coverage, Micronesia could not be assessed using the report's methodology.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Monaco",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/mc.svg",
    "description": "Monaco was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report uses survey-based life evaluations and supporting indicators to compare countries.\n\nWithout the required data collection, Monaco could not be included in the ranked dataset.\n\nIts absence from the ranking reflects data limitations rather than an assessed level of happiness."
  },
  {
    "country_name": "Nauru",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/nr.svg",
    "description": "Nauru was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report measures well-being through internationally collected survey responses.\n\nWithout adequate participation and data coverage, Nauru could not be evaluated under the report's framework.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "North Korea",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/kp.svg",
    "description": "North Korea was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report relies on internationally comparable survey responses to calculate happiness scores and rankings.\n\nWithout the required survey data, the country's performance across the report's core indicators cannot be evaluated using the same methodology as ranked nations.\n\nIts absence from the ranking reflects a lack of available data rather than a reported happiness outcome."
  },
  {
    "country_name": "Palau",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/pw.svg",
    "description": "Palau was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report depends on life-evaluation surveys and supporting indicators to compare countries.\n\nWithout adequate survey coverage, Palau could not be assessed alongside ranked nations.\n\nIts absence from the ranking reflects data availability rather than a measured level of happiness."
  },
  {
    "country_name": "Papua New Guinea",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/pg.svg",
    "description": "Papua New Guinea was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report requires internationally comparable survey responses to evaluate well-being.\n\nWithout the necessary dataset, Papua New Guinea could not be ranked using the report's methodology.\n\nIts absence from the ranking reflects data limitations rather than an official happiness assessment."
  },
  {
    "country_name": "Rwanda",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/rw.svg",
    "description": "Rwanda was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report measures national well-being using survey-based life evaluations and supporting indicators.\n\nWithout adequate survey coverage, Rwanda could not be directly compared with ranked countries.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Saint Kitts and Nevis",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/kn.svg",
    "description": "Saint Kitts and Nevis was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report relies on standardized survey responses to estimate life satisfaction.\n\nWithout the required data collection, the country could not be included in the ranking.\n\nIts absence from the ranking reflects insufficient data rather than a measured level of happiness."
  },
  {
    "country_name": "Saint Lucia",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/lc.svg",
    "description": "Saint Lucia was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report compares countries using life-evaluation surveys and supporting well-being indicators.\n\nWithout adequate survey participation, Saint Lucia could not be assessed under the report's framework.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Saint Vincent and the Grenadines",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/vc.svg",
    "description": "Saint Vincent and the Grenadines was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report uses internationally collected survey responses to measure life evaluations.\n\nWithout a complete dataset, the country could not be evaluated using the same methodology as ranked nations.\n\nIts absence from the ranking reflects data limitations rather than an assessed happiness outcome."
  },
  {
    "country_name": "Samoa",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/ws.svg",
    "description": "Samoa was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report relies on survey-based life evaluations and supporting indicators to compare countries.\n\nWithout adequate survey coverage, Samoa could not be included in the ranked dataset.\n\nIts absence from the ranking reflects data availability rather than a measured level of happiness."
  },
  {
    "country_name": "San Marino",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/sm.svg",
    "description": "San Marino was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report requires internationally comparable survey responses to estimate well-being.\n\nWithout the necessary data collection, San Marino could not be assessed within the report's framework.\n\nIts absence from the ranking reflects insufficient data rather than a measured happiness outcome."
  },
  {
    "country_name": "Saint Thomas and Prince",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/st.svg",
    "description": "Saint Thomas and Prince was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report evaluates countries through life-evaluation surveys and supporting well-being indicators.\n\nWithout adequate survey participation, the country could not be compared with ranked nations.\n\nIts absence from the ranking reflects data availability rather than a measured level of happiness."
  },
  {
    "country_name": "Seychelles",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/sc.svg",
    "description": "Seychelles was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report depends on standardized survey responses to calculate happiness rankings.\n\nWithout the required dataset, Seychelles could not be evaluated using the report's methodology.\n\nIts absence from the ranking reflects data limitations rather than an official happiness assessment."
  },
  {
    "country_name": "Solomon Islands",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/sb.svg",
    "description": "The Solomon Islands was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report compares countries using internationally collected life-evaluation surveys.\n\nWithout adequate survey coverage, the country could not be included in the ranked dataset.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "South Sudan",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/ss.svg",
    "description": "South Sudan was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report relies on internationally comparable survey responses to evaluate life satisfaction and well-being.\n\nWithout the required survey coverage, the country could not be assessed using the report's methodology.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Suriname",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/sr.svg",
    "description": "Suriname was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report measures national well-being through survey-based life evaluations and supporting indicators.\n\nWithout adequate data collection, Suriname could not be directly compared with ranked countries.\n\nIts absence from the ranking reflects insufficient data rather than an assessed level of happiness."
  },
  {
    "country_name": "Syria",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/sy.svg",
    "description": "Syria was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report requires internationally comparable survey responses to calculate happiness scores and rankings.\n\nWithout the necessary survey data, the country's performance across the report's core indicators could not be evaluated.\n\nIts absence from the ranking reflects data availability rather than a reported happiness outcome."
  },
  {
    "country_name": "Timor-Leste",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/tl.svg",
    "description": "Timor-Leste was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report compares countries using life-evaluation surveys and supporting well-being indicators.\n\nWithout adequate survey participation, Timor-Leste could not be assessed under the report's framework.\n\nIts absence from the ranking reflects data limitations rather than a measured level of happiness."
  },
  {
    "country_name": "Tonga",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/to.svg",
    "description": "Tonga was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report uses standardized survey responses to estimate life satisfaction and overall well-being.\n\nWithout the required dataset, Tonga could not be included in the ranked countries list.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Turkmenistan",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/tm.svg",
    "description": "Turkmenistan was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report depends on internationally collected survey responses and supporting indicators to compare countries.\n\nWithout adequate survey coverage, Turkmenistan could not be evaluated using the report's methodology.\n\nIts absence from the ranking reflects insufficient data rather than an assessed happiness level."
  },
  {
    "country_name": "Tuvalu",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/tv.svg",
    "description": "Tuvalu was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe World Happiness Report relies on life-evaluation surveys and supporting well-being indicators to produce rankings.\n\nWithout the necessary survey data, Tuvalu could not be directly compared with ranked nations.\n\nIts absence from the ranking reflects data availability rather than a measured happiness outcome."
  },
  {
    "country_name": "Vanuatu",
    "rank": null,
    "happiness_score": null,
    "flag_url": "https://flagcdn.com/vu.svg",
    "description": "Vanuatu was not included in the World Happiness Report 2026 rankings because sufficient survey data was unavailable for inclusion. Therefore, no official happiness score or rank was assigned.\n\nThe report evaluates countries through internationally comparable survey responses and key well-being indicators.\n\nWithout adequate survey participation, Vanuatu could not be assessed under the same methodology as ranked countries.\n\nIts absence from the ranking reflects data limitations rather than an official happiness assessment."
  }
]

const supabase_URL = "https://qyixkhfuwpmfbipiqtah.supabase.co/rest/v1/The_happiest_countries";
const supabasePublishableKey = "sb_publishable_iIi3mDXBAV7320ADfc8VXw_msFr1ehk";

const uploadTheData = async()=>{
  try{
    const response = await fetch(supabase_URL, {
      method: "POST",
      headers: {
        "apikey": supabasePublishableKey,
        "Authorization": `Bearer ${supabasePublishableKey}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify(the195CountriesList)
    });

    if(!response.ok){
      throw new Error(`HTTP Error! ${response.status}`);
    }
    
    const jsonData = await response.json();
    console.log("Success");
  }catch (error){
    console.log(error);
  }
};

uploadBtn.addEventListener("click", uploadTheData);





